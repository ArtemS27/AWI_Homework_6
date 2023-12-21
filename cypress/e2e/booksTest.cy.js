describe("Book site book test", /*Cypress.env('viewPortPC'),*/ () => {
    beforeEach(() => {
      cy.visit('/');
    });
  
    it("Add a book", () => {
      cy.login("bropet@mail.ru", "123");
      cy.addBook("Title", "Description", "Authors");
    });
  
    it('Add a book to the favorites', () => {
      cy.login("bropet@mail.ru", "123");
      cy.addBook("Title", "Description", "Authors");
      cy.contains('Add to favorite').click();
    });
  
    it('Delete a book from favorites', () => {
      cy.login("bropet@mail.ru", "123");
      cy.addBook("Title", "Description", "Authors");
      cy.contains('Add to favorite').click();
      cy.contains('Delete from favorite').click();
    });
  });
  