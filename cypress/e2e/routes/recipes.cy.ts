import { TRecipe } from "@/app/recipes/Components/RecipeButton";

describe("Visit Recipes page page", () => {
  it("filters recipes by tags", () => {
    cy.visit(Cypress.env("hostname") + "recipes");

    // no tags initially
    cy.get('[aria-label="All tags"]').should("not.exist");
    cy.contains("clear tag").should("have.attr", "disabled");
    cy.contains("show less tags").should("have.attr", "disabled");
    cy.contains("button", "show tags").should("exist");

    // show tags
    cy.contains("button", "show tags").click();
    cy.get('[aria-label="All tags"]').should("exist");

    // show more tags
    cy.contains("show more tags").click();
    cy.contains("show less tags").should("not.have.attr", "disabled");

    // click a filter
    cy.contains("#Cake").click();
    cy.contains("clear tag").should("not.have.attr", "disabled");
  });

  it("paginates through recipes", () => {
    cy.visit(Cypress.env("hostname") + "recipes");

    cy.request("localhost:3001/recipes").then((res) => {
      const recipes: TRecipe[] = res.body;

      recipes.slice(0, 15).forEach((recipe) => {
        cy.get(`[aria-label="View ${recipe.name}"]`).should(
          "have.attr",
          "href",
          `/recipes/${recipe.id}`
        );
      });

      // show next list of recipes
      cy.get(`[aria-label="Show next items in list"]`).click();

      recipes.slice(15).forEach((recipe) => {
        cy.get(`[aria-label="View ${recipe.name}"]`).should(
          "have.attr",
          "href",
          `/recipes/${recipe.id}`
        );
      });
    });
  });
});
