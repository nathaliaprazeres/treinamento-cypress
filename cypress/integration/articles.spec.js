// articles.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
/* ==== Test Created with Cypress Studio ==== */
describe('Artigos', () => {
  

it('Novo Artigo', function() {

  cy.login();
/* ==== Generated with Cypress Studio ==== */
//validar que abriu a tela principal
  cy.get('a[href$=editor]').click();
  cy.get('input[placeholder="Article title"]').type('ARTIGO 1');
  cy.get('input[placeholder="What is this article about?"]').type('um novo artigo um');
  cy.get('form textarea').type('artigo1 um novo');
  cy.get('input[placeholder="Enter tags"]').type('novo');
  cy.get('button.btn-primary').contains('Publish article').click();
  //validar a criacao do titulo

  cy.get('h1').should('contain.text', 'ARTIGO 1');
  /* ==== End Cypress Studio ==== */
});

});

