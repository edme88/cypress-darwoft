/// <reference types="cypress" />

class DarwoftPage {
  getLetsTalkBtn() {
    return cy.get('[id="hero_button"]');
  }

  getNameInput() {
    return cy.get('[id="edit-full-name"]');
  }

  getCompanyInput() {
    return cy.get('[id="edit-organization"]');
  }

  getEmailInput() {
    return cy.get('[id="edit-email"]');
  }

  getPhoneInput() {
    return cy.get('[id="edit-phone-number"]');
  }

  getMessageInput() {
    return cy.get('[id="edit-message"]');
  }

  getLetsDoItBtn() {
    return cy.get('[id="edit-actions-submit"]');
  }

  getCancelBtn() {
    return cy.get('[id="edit-actions-reset"]');
  }
}

module.exports = new DarwoftPage();
