describe("Visit home page", () => {
  it("passes", () => {
    cy.visit(Cypress.env("hostname"));
  });

  it("opens the navbar", () => {
    cy.visit(Cypress.env("hostname"));

    const navLinks = [
      {
        path: "/",
        name: "Home",
      },
      {
        path: "/fruits",
        name: "Fruits",
      },
      {
        path: "/poems",
        name: "Poems",
      },
      {
        path: "/rock-paper-scissors",
        name: "Rock, Paper, Scissors",
      },
      {
        path: "/recipes",
        name: "Recipes",
      },
      {
        path: "/gallery",
        name: "Art Gallery",
      },
      {
        path: "/trivia",
        name: "Trivia",
      },
      {
        path: "/higher-or-lower",
        name: "Higher or Lower",
      },
      {
        path: "/jokes",
        name: "Jokes",
      },
    ] as const;

    // get navbar element
    cy.get("#menu").click();

    // assert link elements presence
    navLinks.forEach((el) => {
      cy.contains(el.name)
        .parent()
        .find("a")
        .should("have.attr", "href", el.path);
    });
  });
});
