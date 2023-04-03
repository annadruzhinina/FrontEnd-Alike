describe("Landing Page", () => {
  beforeEach(() => {
    cy.visit("https://alike-ga.netlify.app/");
  });

  it("displays the landing page header", () => {
    // Top banner with logo
    cy.get(".landing-home-header").should("be.visible");
    // Logo
    cy.get(".landing-home-header-image").should("be.visible");
    // Logo text -> Alike
    cy.get(".landing-home-header span").should("have.text", "Alike");
  });
  // SignIn form
  it("displays the sign in form", () => {
    cy.get(".form").should("be.visible");
    cy.get(".SigninLogo").should("have.text", "Sign In");
    cy.get(".username").should("be.visible");
    cy.get("#pw").should("be.visible");
    cy.get("#submitCredentials").should("have.text", "Login");
    cy.get("#submitCredentials[value='submit']").should(
      "have.attr",
      "type",
      "submit"
    );
    cy.get("button").eq(1).should("have.text", "SignUp");
  });
});
