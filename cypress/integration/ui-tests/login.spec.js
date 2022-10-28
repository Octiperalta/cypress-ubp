/// <reference types="cypress" />
import HeaderPage from "../../pages/header.js";
import LoginPage from "../../pages/login";
import AccountPage from "../../pages/myAccount";
import HomePage from "../../pages/home";
import Data from "../../fixtures/users.json";

describe("Login Test", () => {
  beforeEach(() => {
    cy.visit("https://automationteststore.com/");
    const header = new HeaderPage();
    header.getLoginRegisterButton().click();
  });

  it("Login Fail: Wrong user and password", () => {
    const login = new LoginPage();

    login.getUserInput().type("octavio");
    login.getUserPassword().type("123456");
    login.getLoginButton().click();

    login
      .getAlertNotification()
      .should("contain.text", "Error: Incorrect login or password provided.");
  });

  it("Successfull Login", () => {
    const login = new LoginPage();

    login.getUserInput().type(Data.users[0].user);
    login.getUserPassword().type(Data.users[0].password);
    login.getLoginButton().click();
  });
});
