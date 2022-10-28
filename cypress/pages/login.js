class loginLocator {
  constructor() {
    this.userInput = "#loginFrm_loginname";
    this.userPass = "#loginFrm_password";
    this.loginButton = 'button[title="Login"]';
    this.alertNotification = "div.alert";
  }
}

export default class Login {
  constructor() {
    this.locators = new loginLocator();
  }

  getUserInput() {
    return cy.get(this.locators.userInput);
  }

  getUserPassword() {
    return cy.get(this.locators.userPass);
  }

  getLoginButton() {
    return cy.get(this.locators.loginButton);
  }

  getAlertNotification() {
    return cy.get(this.locators.alertNotification);
  }
}
