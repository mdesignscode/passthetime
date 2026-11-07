describe("Visit art gallery page", () => {
  it("prints an artwork's label and closes it", () => {
    cy.visit(Cypress.env("hostname") + "gallery");

    cy.get('[aria-label="Artworks"] button').should("have.length.greaterThan", 0);
    cy.contains("Pick a work to print its label");

    cy.get('[aria-label="Artworks"] button').first().click();
    cy.get('[aria-label="Artworks"] button')
      .first()
      .should("have.attr", "aria-pressed", "true");
    cy.get("#art-info").contains("Artist");

    cy.get("#close-button").click();
    cy.get("#close-button").should("not.exist");
  });
});
