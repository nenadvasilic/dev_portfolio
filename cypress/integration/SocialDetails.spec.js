/// <reference types="cypress" />

describe("SocialDetails", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("body").should("be.visible");
  });

  it("have correct social links", () => {
    cy.get("[data-testid='github']").should(
      "have.attr",
      "href",
      "https://github.com/nenadvasilic"
    );
    cy.get("[data-testid='youtube']").should(
      "have.attr",
      "href",
      "https://www.youtube.com/nenadvasilic"
    );
    cy.get("[data-testid='linkedin']").should(
      "have.attr",
      "href",
      "https://www.linkedin.com/in/nenadvasilic/"
    );
    cy.get("[data-testid='twitter']").should(
      "have.attr",
      "href",
      "https://twitter.com/nenadvasilic"
    );
  });
});
