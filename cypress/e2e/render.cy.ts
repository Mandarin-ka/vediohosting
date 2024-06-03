it('Render page', () => {
  cy.visit('/');
  cy.get('[data-testid="header"]').should('exist');
  cy.get('[data-testid="cards"]').should('exist');
  cy.get('[data-testid="controls"]').should('exist');
  cy.get('[data-testid="footer"]').should('exist');
});
