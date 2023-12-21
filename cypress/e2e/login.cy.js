describe("Book site login test", /*Cypress.env('viewPortPC'),*/ () => {
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
});
