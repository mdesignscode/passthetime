describe("Visit fruits page", () => {
  it("renders all fruit in database", async () => {
    cy.visit(Cypress.env("hostname") + "fruits");

    // get fruits
    cy.request("localhost:3001/fruits").then((res) => {
      const fruits: TFruit[] = res.body;

      // all fruit are rendered
      fruits.forEach((fruit) => {
        cy.contains(fruit.name).should("not.be.undefined");
      });

      // test a single fruit
      const fruit = fruits[0];

      cy.contains(fruit.name).parent().click().get("#close-button").click();
    });
  });
});
