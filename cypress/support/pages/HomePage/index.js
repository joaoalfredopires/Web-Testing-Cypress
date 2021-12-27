const el = require("./elements").ELEMENTS;

class HomePage {

    acessarCategoria(category){
        cy.get(`a[Title=${ category }]`).last().click();
    }

    acessarLogin(){
        cy.get(el.sign_in).click();
    }
}

export default new HomePage();