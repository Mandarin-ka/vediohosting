describe('Change genre', () => {
  it('Change genre', () => {
    cy.visit('/');

    const baseCards = cy.get('[data-testid="title"]');
    cy.get('[data-testid="control-button"]').contains('приключения').click();

    cy.get('[data-testid="title"]').should('not.deep.equal', baseCards);
  });

  it('Return genre', () => {
    cy.visit('/');

    cy.get('[data-testid="title"]')
      .invoke('text')
      .then((text: string) => {
        cy.get('[data-testid="control-button"]').contains('приключения').click();
        cy.get('[data-testid="title"]').should('not.have.text', text);
        cy.get('[data-testid="control-button"]').contains('Все').click();
        cy.get('[data-testid="title"]').should('have.text', text);
      });
  });
});
