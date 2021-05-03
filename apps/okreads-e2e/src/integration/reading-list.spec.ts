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

  it('Click Undo, then the book will not be moved from reading list', async () => {
    cy.get('[data-testing="toggle-reading-list"]').click();

    const prevLength = cy.$$('.reading-list-item').length;

    cy.get('[data-testing="remove-item-button"]').eq(0).click();

    cy.wait(1000)

    cy.get('.mat-simple-snackbar-action').click();

    const currLength = cy.$$('.reading-list-item').length;
    expect(prevLength).equal(currLength);
  });

  it('Not click Undo in 2 seconds, then the book will be moved from reading list', async () => {
    cy.get('[data-testing="toggle-reading-list"]').click();

    const prevLength = cy.$$('.reading-list-item').length;

    cy.get('[data-testing="remove-item-button"]').eq(0).click();

    cy.wait(3000).then(
      ()=>{
        const currLength = cy.$$('.reading-list-item').length
        expect(prevLength).equal(currLength+1);
      }
    );
  });

});
