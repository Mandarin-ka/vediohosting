it('Render cards', () => {
  cy.visit('/');
  cy.get('[data-testid="card"]').should('have.length', 16);

  cy.get('[data-testid="pagination"]').click();
  cy.get('[data-testid="card"]').should('have.length', 32);

  cy.get('[data-testid="pagination"]').click();
  cy.get('[data-testid="card"]').should('have.length', 48);
});
