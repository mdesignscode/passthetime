describe("Visit Rock, Paper, Scissors page", () => {
  it("plays Rock, Paper, Scissors", async () => {
    cy.visit(Cypress.env("hostname") + "rock-paper-scissors");

    selectAnObject()

    // selected object should be displayed
    cy.get('[aria-label="Player selected object"]').should(
      "have.text",
      "Your object: Air"
    );

    cy.contains("button", "Play").click();
    cy.contains("button", "Play Again").click();
  });

  it("asserts player results", () => {
    cy.visit(Cypress.env("hostname") + "rock-paper-scissors");

    selectAnObject()

    let results = {
      player: 0,
      computer: 0,
    };

    // play a few rounds
    for (let index = 0; index < 10; index++) {
      assertPlayReslts(index);
    }

    function assertPlayReslts(index: number) {
      // click play again
      if (index) {
        cy.contains("button", "Play Again").click();
      }

      // play a round
      cy.contains("button", "Play").click();
      cy.get('[aria-label="Player result"]')
        .invoke("text")
        .then((text) => {
          const playerWon = text === "You Won";
          results = {
            player: playerWon ? results.player + 1 : results.player,
            computer: !playerWon ? results.computer + 1 : results.computer,
          };

          // assert user score
          cy.get('[aria-label="Score section"]')
            .find("p:nth-child(1)")
            .should("have.text", `Player: ${results.player}`);

          // assert computer score
          cy.get('[aria-label="Score section"]')
            .find("p:nth-child(2)")
            .should("have.text", `Computer: ${results.computer}`);
        });
    }
  });

  function selectAnObject() {
    // show objects
    cy.get("#all-objects-button").click();

    cy.contains("button", "Play").should("have.attr", "disabled");
    cy.contains("Your object: Air").should("not.be.undefined");

    // select an element
    cy.contains("button", "Air").click();
    cy.contains("button", "Play").should("not.have.attr", "disabled");
    cy.get(".close-button").click();
  }
});
