const el = require("./elements").ELEMENTS;

class CategoryPage {
    
    CATEGORIES = [
        "T-shirts",
        "Dresses",
        "Women"
    ];

    validarAcessoCategoria(category){

        cy.get(el.breadcrumb).should("contain.text", `${category}`)
    }
}

export default new CategoryPage();