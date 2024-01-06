import "@percy/cypress";

describe("Integration test with visual testing", function () {
  it("Homepage", function () {
    cy.visit("https://develop.team-ux-com.pages.dev/");
    cy.percySnapshot();
  });
});
