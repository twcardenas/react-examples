/// <reference types="cypress" />

describe("find* dom-testing-library commands", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080");
  });

  // Test each of the types of queries: LabelText, PlaceholderText, Text, DisplayValue, AltText, Title, Role, TestId

  it("findByLabelText", () => {
    cy.findByText("Home Path").should("exist");
  });
});
