describe('about.js', () => {
  it('Loads about text', () => {
    cy.server();
    cy.route('/api/About', 'fixtures:about');
    cy.visit('/');
    cy.get('[data-cy-text]')
      .should('exist')
      .and('contain', 'Lorem');
  });
});
