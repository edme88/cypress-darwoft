/// <reference types="cypress" />
import darwoftPage from "../../page/darwoft";

describe("Darwoft Home", () => {
  it("Automation test of Home", () => {
    //Abrir página
    cy.visit("https://www.darwoft.com/");

    //Redirigir a Contanct
    darwoftPage.getLetsTalkBtn().click();
    cy.url().should("include", "/lets-talk");

    //Completar los datos
    darwoftPage.getNameInput().type("Agus Aliciardi");
    darwoftPage.getCompanyInput().type("Darwoft");
    darwoftPage.getEmailInput().type("agustina.aliciardi@darwoft.com");
    darwoftPage.getPhoneInput().type("3513892262");
    darwoftPage
      .getMessageInput()
      .type("Esto es un ejemplo de Cypress - Automation Framework");

    //Cancelar
    darwoftPage.getCancelBtn().click();

    //Verificar campos Vacios
    darwoftPage.getNameInput().scrollIntoView().should("have.text", "");
    darwoftPage.getCompanyInput().should("have.text", "");
    darwoftPage.getEmailInput().should("have.text", "");
    darwoftPage.getPhoneInput().should("have.text", "");
    darwoftPage.getMessageInput().should("have.text", "");
  });
});
