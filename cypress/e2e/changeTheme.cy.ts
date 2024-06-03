it('Change app theme', () => {
  cy.visit('/');

  cy.get('[data-testid="app"]').should('have.class', 'light');

  cy.get('[data-testid="toggler"]').click();

  cy.get('[data-testid="app"]').should('have.class', 'dark');

  cy.get('[data-testid="toggler"]').click();

  cy.get('[data-testid="app"]').should('have.class', 'light');
});
