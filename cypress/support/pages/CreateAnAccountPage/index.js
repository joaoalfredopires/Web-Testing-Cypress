const el = require("./elements").ELEMENTS;

class  CreateAnAccountPage {

    preencheDadosCriacaoDeConta(){
        cy.get(el.gender_radio).click();
        cy.get(el.firstName_informations).type("Fulaninho");
        cy.get(el.lastName_informations).type("Silva");
        cy.get(el.password).type("senha123");
        cy.get(el.birthDate_day).type("12");
        cy.get(el.birthDate_months).type("May");
        cy.get(el.birthDate_years).type("1999");
        cy.get(el.firstName_adress).type("Fulaninho");
        cy.get(el.lastName_adress).type("Silva");
        cy.get(el.company_input).type("Empresa do Fulaninho");
        cy.get(el.address_input).type("Rua Tal, 123");
        cy.get(el.addressComplement_input).type("Ap 402");
        cy.get(el.city_input).type("Los Angeles");
        cy.get(el.state_select).type("California");
        cy.get(el.aditionlInformation_input).type("Informações adicionais sobre o esdereço");
        cy.get(el.homePhone_input).type("555-5555");
        cy.get(el.mobilePhone_input).type("666-6666");
        cy.get(el.alias_input).type("Meu endereço");
        cy.get(el.submitButton).click();

    }

}

export default new CreateAnAccountPage();