const el = require("./elements").ELEMENTS;

class MyAccountPage{

    validarLoginComSucesso(){
        cy.get(el.page_heading).should("have.text", "My account");
        cy.get(el.account).should("have.text", "Email Teste");
    }
}

export default new MyAccountPage();