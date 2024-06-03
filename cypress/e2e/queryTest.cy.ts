describe('Query tests', () => {
  it('test base query and press enter', () => {
    cy.visit('/');

    cy.get('[data-testid="query-input"]').should('exist');
    cy.get('[data-testid="card"]').should('exist');

    cy.get('[data-testid="title"]').should('not.have.text', /мстители/gi);

    cy.get('[data-testid="query-input"]').type('мстители{enter}');
    cy.get('[data-testid="title"]')
      .contains(/мстители/gi)
      .should('have.length.greaterThan', 0);

    cy.get('[data-testid="query-input"]').clear();
    cy.get('[data-testid="query-input"]').type('шерлок{enter}');

    cy.get('[data-testid="title"]').should('not.have.text', /шерлок/gi);
    cy.get('[data-testid="title"]')
      .contains(/шерлок/gi)
      .should('have.length.greaterThan', 0);
  });

  it('test base query and press button', () => {
    cy.visit('/');

    cy.get('[data-testid="query-input"]').should('exist');
    cy.get('[data-testid="query-button"]').should('exist');

    cy.get('[data-testid="card"]').should('exist');

    cy.get('[data-testid="title"]').should('not.have.text', /метро/gi);
    cy.get('[data-testid="query-input"]').type('Метро');

    cy.get('[data-testid="query-button"]').click();
    cy.get('[data-testid="title"]').contains(/метро/gi).should('have.length.greaterThan', 0);
  });

  it('clear query', () => {
    cy.visit('/');

    cy.get('[data-testid="query-input"]').should('exist');

    cy.get('[data-testid="card"]').should('exist');

    cy.get('[data-testid="title"]').should('not.have.text', /мстители/gi);
    cy.get('[data-testid="query-input"]').type('мстители{enter}');
    cy.get('[data-testid="title"]')
      .contains(/мстители/gi)
      .should('have.length.greaterThan', 0);

    cy.get('[data-testid="query-input"]').clear();
    cy.get('[data-testid="query-button"]').click();
    cy.get('[data-testid="title"]')
      .contains(/мстители/gi)
      .should('have.length', 0);
  });
});
