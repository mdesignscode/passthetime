describe("Visit trivia page", () => {
  it("plays a full round and scores it", () => {
    cy.visit(Cypress.env("hostname") + "trivia");
    cy.get('[aria-label="Play Computers"]').click();

    for (let question = 1; question <= 10; question++) {
      cy.contains(`Question ${question} of 10`);
      cy.get(".key-answer").should("have.length", 4).first().click();
      cy.get("#trivia-status").should("not.be.empty");
      cy.get(".key-right").should("have.length", 1);
      cy.contains("button", question === 10 ? "See results" : "Next question").click();
    }

    cy.get("#trivia-score")
      .invoke("text")
      .then((text) => {
        const score = text.replace("Score: ", "");
        cy.get("#trivia-result").should("have.text", `${score} of 10`);
      });

    cy.contains("button", "Play again").click();
    cy.contains("Question 1 of 10");
    cy.get("#trivia-score").should("have.text", "Score: 0");
  });
});
