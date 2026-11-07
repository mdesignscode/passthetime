describe("Visit jokes page", () => {
  it("prints jokes and reveals punchlines", () => {
    cy.visit(Cypress.env("hostname") + "jokes");
    cy.contains("Nothing printed yet");

    cy.contains("button", "Print a joke").click();
    cy.get("#joke").should("not.be.empty");
    cy.get("#jokes-printed").should("have.text", "Printed: 1");

    cy.get("body").then(($body) => {
      if ($body.text().includes("Show punchline")) {
        cy.contains("button", "Show punchline").click();
        cy.contains("button", "Show punchline").should("not.exist");
      }
    });

    cy.contains("button", "Print a joke").click();
    cy.get("#jokes-printed").should("have.text", "Printed: 2");

    // changing category empties the tray
    cy.contains("button", "Programming").click();
    cy.contains("Nothing printed yet");
  });
});
