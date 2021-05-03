describe('When: I use the reading list feature', () => {
  beforeEach(() => {
    cy.startAt('/');
  });

  it('Then: I should see my reading list', () => {
    cy.get('[data-testing="toggle-reading-list"]').click();

    cy.get('[data-testing="reading-list-container"]').should(
      'contain.text',
      'My Reading List'
    );
  });

  it('It should display finished date after I click the finish button', async () => {

    cy.get('[data-testing="toggle-reading-list"]').click();

    cy.get('[data-testing="finish-button"]').eq(0).click();

    cy.get('[data-testing="finish-date"]').eq(0).should(
      'contain.text',
      new Date().toLocaleDateString('en-US')
      )
  });
  
});
