describe("Visit poems page", () => {
  it("explores different options for poems", async () => {
    cy.visit(Cypress.env("hostname") + "poems");

    // get poems data to test on
    cy.request("localhost:3001/poems").then((res) => {
      const data: { poem: TPoem; author: TAuthor } = res.body;

      function assertOptionSelect(
        title: string,
        option: string,
        assertText: string,
        expectedLink: string
      ) {
        // select option
        cy.contains(title).parent().select(option);

        // assert link text update
        cy.get("#explore-poems")
          .should("have.text", assertText)
          .should("have.attr", "href", expectedLink);
      }

      // authors select
      assertOptionSelect(
        "Select author...",
        data.author.name,
        `View poems by ${data.author.name}`,
        "/poems/1"
      );

      // title select
      assertOptionSelect(
        "Select title...",
        `${data.poem.title} By ${data.author.name}`,
        `View ${data.poem.title}`,
        "/poems/1/1"
      );

      // random poem select
      cy.contains("Random Poem").click();

      // assert link text update
      cy.get("#explore-poems")
        .should("have.text", "Explore random poems")
        .should("have.attr", "href", "/poems/random");

      // options inputs should reset on option change

      // authors select
      assertOptionSelect(
        "Select author...",
        data.author.name,
        `View poems by ${data.author.name}`,
        "/poems/1"
      );

      // title select
      assertOptionSelect(
        "Select title...",
        `${data.poem.title} By ${data.author.name}`,
        `View ${data.poem.title}`,
        "/poems/1/1"
      );
    });
  });

  it("visits authors page", () => {
    cy.visit(Cypress.env("hostname") + "poems/1");

    // get poems data to test on
    cy.request("localhost:3001/poems").then((res) => {
      const { poem }: { poem: TPoem } = res.body;

      cy.contains(poem.title)
        .parent()
        .click()
        .contains(poem.lines)
        .should("not.be.undefined")
        .get("#close-button")
        .click();
    });
  });

  it("visits a poem page", () => {
    cy.visit(Cypress.env("hostname") + "poems/1/1");

    // get poems data to test on
    cy.request("localhost:3001/poems").then((res) => {
      const {
        totalPoems,
        totalAuthors,
      }: { totalPoems: number; totalAuthors: number } = res.body;

      // previous link is disabled for first poem
      cy.get("#previous-poem").should("have.css", "pointer-events", "none");
      cy.get("#next-poem").click();
      cy.get("#previous-poem").should("not.have.css", "pointer-events", "none");

      // visit last poem
      cy.visit(Cypress.env("hostname") + `poems/${totalAuthors}/${totalPoems}`);

      // next link is disabled for last poem
      cy.get("#next-poem").should("have.css", "pointer-events", "none");
      cy.get("#previous-poem").click();
      cy.get("#next-poem").should("not.have.css", "pointer-events", "none");
    });
  });

  it("visits a random poem", () => {
    cy.visit(Cypress.env("hostname") + "poems/random");
  });
});
