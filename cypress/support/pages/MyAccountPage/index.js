const el = require("./elements").ELEMENTS;

class MyAccountPage{

    validarLoginComSucesso(){
        cy.get(el.page_heading).should("have.text", "My account");
        cy.get(el.account).should("have.text", "Email Teste");
    }
    
    validarCadastroComSucesso(){
        cy.get(el.page_heading).should("have.text", "My account");
        cy.get(el.account).should("have.text", "Fulaninho Silva");
    }
}

export default new MyAccountPage();