const el = require("./elements").ELEMENTS;

class  LoginPage {

    

    preencherDadosLogin(){
        cy.get(el.email).type("email_de_teste@gmail.com");
        cy.get(el.password).type("teste123");
        cy.get(el.sign_in).click();
    }

    preencherCampoCriacaoDeConta(){
        cy.get(el.email_create).type("emailaleatorio"+ Date.now() +"@mail.com");
        cy.get(el.submit_create).click();
    }
    
}

export default new LoginPage();