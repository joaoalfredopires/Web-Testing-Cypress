/* Testes:  1 - Acessar categorias
            2 - Realizar login 
            3 - Realizar cadastro
*/ 

/// <reference types="Cypress" />

//import homePage  from "../support/pages/HomePage";
//import categoryPage from "../support/pages/CategoryPage";
//import loginPage from "../support/pages/LoginPage";
//import myAccountPage from "../support/pages/MyAccountPage";

import {
    homePage,
    categoryPage,
    loginPage,
    myAccountPage,
    createAnAccountPage 
} from "../support/pages/"


describe("Fluxos do ecommerce", () => {

    
    categoryPage.CATEGORIES.forEach(category => {

        it(` Acessar categoria ${ category }`, () => {

        homePage.acessarCategoria(category);
        categoryPage.validarAcessoCategoria(category); 
        });        
    });

    it("Fazer login", () => {
        homePage.acessarLogin();
        loginPage.preencherDadosLogin();
        myAccountPage.validarLoginComSucesso();
    });

    it("Fazer cadastro", () => {
        homePage.acessarLogin();
        loginPage.preencherCampoCriacaoDeConta();
        cy.wait(5000);                                      // Wait e assert incluídos devido a problemas 
        createAnAccountPage.validarPaginaCriacaoDeConta();  // de performance no site.
        createAnAccountPage.preencherDadosCriacaoDeConta();
        myAccountPage.validarCadastroComSucesso();
    });
});