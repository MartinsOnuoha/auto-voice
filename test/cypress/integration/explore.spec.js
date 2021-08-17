/// <reference path="cypress" />
/// <reference path="../support/index.d.ts" />

// Use `cy.dataCy` custom command for more robust tests
// See https://docs.cypress.io/guides/references/best-practices.html#Selecting-Elements

// ** This file is an example of how to write Cypress tests, you can safely delete it **

// This test will pass when run against a clean Quasar project
describe('Explore Page',
  {
    browser: 'chrome',
    viewportWidth: 1024,
    viewportHeight: 700,
  },
  () => {
    beforeEach(() => {
      cy.visit('/explore');
    });
  });
