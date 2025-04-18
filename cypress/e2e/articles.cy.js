/// <reference types="cypress" />

describe('NYT Most Popular Articles App', () => {
  it('loads and displays articles', () => {
    cy.visit('/');
    cy.contains('NYT Most Popular Articles');
    cy.get('li').should('have.length.greaterThan', 0).first().click();
    cy.url().should('include', '/article/');
    cy.contains('Read more');
  });

  it('can navigate back to homepage', () => {
    cy.visit('/');
    cy.get('li').first().click();
    cy.contains('← Back').click();
    cy.contains('NYT Most Popular Articles');
  });
});
