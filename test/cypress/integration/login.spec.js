/// <reference path="cypress" />
/// <reference path="../support/index.d.ts" />

// Use `cy.dataCy` custom command for more robust tests
// See https://docs.cypress.io/guides/references/best-practices.html#Selecting-Elements

// ** This file is an example of how to write Cypress tests, you can safely delete it **

// This test will pass when run against a clean Quasar project
describe('Login Page',
  {
    browser: 'chrome',
    viewportWidth: 1024,
    viewportHeight: 700,
  },
  () => {
    beforeEach(() => {
      cy.visit('/');
    });
    it('.should() - have a pretty image', () => {
      cy.get('.homePage img')
        .should('have.class', 'side-image')
        .and('have.attr', 'src');
    });
    it('.should() - have form title', () => {
      cy.get('.login-form')
        .should('contain', 'Enter your email');
    });
    it('.should() - be able to type in form', () => {
      cy.get('.email input')
        .type('fake@email.com')
        .should('have.value', 'fake@email.com');
    });
    it('.should() - have a submit button', () => {
      cy.get('.q-btn')
        .should('have.attr', 'type', 'submit');
    });
    it('.should() - have a white card', () => {
      cy.get('.q-card').should('have.css', 'background-color', 'rgb(255, 255, 255)');
    });
    it('.should() - not show loader if no input', () => {
      cy.get('button[type=submit]').click();
      cy.get('#q-loading').should('not.exist');
    });
    it('.should() - show loader if input', () => {
      cy.get('.email input').type('fake');
      cy.get('button[type=submit]').click();
      cy.get('.q-loading').should('be.visible');
    });
    // it('.should() - show magic iframe', () => {
    //   cy.get('.email input').type('fake');
    //   // cy.get('form').submit()
    //   //   .then(() => {
    //   //     cy.get('.magic-iframe').should('be.visible');
    //   //   });
    // });
  });

// ** The following code is an example to show you how to write some tests for your home page **
//
// describe('Home page tests', () => {
//   beforeEach(() => {
//     cy.visit('/');
//   });
//   it('has pretty background', () => {
//     cy.dataCy('landing-wrapper')
//       .should('have.css', 'background').and('match', /(".+(\/img\/background).+\.png)/);
//   });
//   it('has pretty logo', () => {
//     cy.dataCy('landing-wrapper img')
//       .should('have.class', 'logo-main')
//       .and('have.attr', 'src')
//       .and('match', /^(data:image\/svg\+xml).+/);
//   });
//   it('has very important information', () => {
//     cy.dataCy('instruction-wrapper')
//       .should('contain', 'SETUP INSTRUCTIONS')
//       .and('contain', 'Configure Authentication')
//       .and('contain', 'Database Configuration and CRUD operations')
//       .and('contain', 'Continuous Integration & Continuous Deployment CI/CD');
//   });
// });
