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
  it("logs in a user with valid credentials", () => {
    cy.intercept("POST", "/login").as("login");
    cy.get(".username").type("myusername");
    cy.get("#pw").type("Qwertyuiop1$");
    cy.get("#submitCredentials").click();

    cy.wait("@login").its("status").should("eq", 200);
    cy.url().should("include", "/home");
  });

  it("displays an error message for an invalid password", () => {
    cy.get(".username").type("myusername");
    cy.get("#pw").type("");
    cy.get("#submitCredentials").click();

    cy.get(".loginErrorMessage").should(
      "have.text",
      "Please Enter a valid password"
    );
  });

  it("navigates to the sign up page", () => {
    cy.get("button").eq(1).click();
    cy.url().should("include", "/sign-up");
  });
});
