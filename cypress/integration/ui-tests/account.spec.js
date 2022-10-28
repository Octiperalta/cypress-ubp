import Data from "../../fixtures/users.json";
import AccountPage from "../../pages/myAccount";

describe("Account Test", () => {
  beforeEach(() => {
    cy.visit("https://automationteststore.com/");
    cy.login(Data.users[0].user, Data.users[0].password);
  });

  it("Check account navigations buttons default color css", () => {
    const accountNav = new AccountPage();

    // Color por default
    accountNav.getAccountNavBtns().each($button => {
      cy.wrap($button)
        .should("have.css", "color", "rgb(119, 119, 119)")
        .should("have.css", "background-color", "rgb(245, 245, 245)");
    });
  });

  it("Firstname field is required", () => {
    const accountNav = new AccountPage();

    accountNav.getAccountSidebar().within(() => {
      cy.get(":nth-child(3)").click();
    });

    accountNav.getAccountInput("firstname").clear();

    cy.get('button[title="Continue"]').click();

    cy.get(".form-group.has-error .help-block").should(
      "have.text",
      "First Name must be between 1 and 32 characters!"
    );
  });

  it("Successfull email update", () => {
    const accountNav = new AccountPage();

    accountNav.getAccountSidebar().within(() => {
      cy.get(":nth-child(3)").click();
    });

    accountNav.getAccountInput("email").clear();
    accountNav.getAccountInput("email").type("joaquin.peralta@mail.com");

    cy.get('button[title="Continue"]').click();

    accountNav
      .getAccountSettingsAlert()
      .should("have.class", "alert-success")
      .should("have.css", "color", "rgb(60, 118, 61)")
      .should("have.css", "background-color", "rgb(223, 240, 216)")
      .should(
        "have.contain",
        "Success: Your account has been successfully updated."
      );
  });
});
