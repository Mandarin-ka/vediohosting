describe('Change theme', () => {
  it('Change genre', () => {
    cy.visit('/');

    cy.get('[data-testid="toggler"]').should('not.have.class', 'dark');
    cy.get('[data-testid="toggler"]').click();
    cy.get('[data-testid="toggler"]').should('have.class', 'dark');
    cy.get('[data-testid="toggler"]').click();
    cy.get('[data-testid="toggler"]').should('have.class', 'light');
  });
});
