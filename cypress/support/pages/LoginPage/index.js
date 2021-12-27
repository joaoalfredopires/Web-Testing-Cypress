const el = require("./elements").ELEMENTS;

class  LoginPage {

    preencherDadosLogin(){
        cy.get(el.email).type("email_de_teste@gmail.com");
        cy.get(el.password).type("teste123");
        cy.get(el.sign_in).click();
    }
}

export default new LoginPage();