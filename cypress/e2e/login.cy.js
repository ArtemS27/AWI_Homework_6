describe("Book site test", /*Cypress.env('viewPortPC'),*/ () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it.only("Should log in", () => {
    cy.login("bropet@mail.ru", "123");
    cy.contains("Добро пожаловать bropet@mail.ru").should("be.visible");
  });

  it("Should throw error if email is empty", () => {
    cy.login(null, "123");
    cy.get("#mail").then((elements) => {
        expect(elements[0].checkValidity()).to.be.false;
    });
  });

  it("Should throw error if password is empty", () => {
    cy.login("bropet@mail.ru", null);
    cy.get("#pass").then((elements) => {
        expect(elements[0].checkValidity()).to.be.false;
    });
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
