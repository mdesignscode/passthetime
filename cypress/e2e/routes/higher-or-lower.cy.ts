describe("Visit Higher or Lower page", () => {
  it("resolves a guess and can start a new game", () => {
    cy.visit(Cypress.env("hostname") + "higher-or-lower");
    cy.get("#card-status").should("have.text", "Make your guess.");
    cy.contains("Cards left: 51");

    cy.contains("button", "Higher").click();
    cy.get("#card-status").should("not.have.text", "Make your guess.");

    // keep guessing until the game ends, then restart
    function playUntilOver(): void {
      cy.get("body").then(($body) => {
        if ($body.find("button:contains('New game')").length) return;

        cy.contains("button", "Higher").then(($button) => {
          if (!$button.prop("disabled")) cy.wrap($button).click();
        });
        cy.wait(1200);
        playUntilOver();
      });
    }

    playUntilOver();
    cy.contains("button", "New game").click();
    cy.get("#card-streak").should("have.text", "Streak: 0");
    cy.contains("Cards left: 51");
  });
});
