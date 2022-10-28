class accountLocator {
  constructor() {
    this.manageAccountBtn = 'a[data-original-title="Manage Account"]';
    this.accountSidebar = "ul.side_account_list";
    this.accountFormInputs = "input#AccountFrm_";
    this.accountSettingsAlert = ".alert";
    this.accountNavBtns = ".nav-dash > li > a";
  }
}

export default class Account {
  constructor() {
    this.locators = new accountLocator();
  }

  getAccountNavBtns() {
    return cy.get(this.locators.accountNavBtns);
  }

  getAccountSidebar() {
    return cy.get(this.locators.accountSidebar);
  }

  getAccountInput(field) {
    return cy.get(this.locators.accountFormInputs + field);
  }

  getAccountSettingsAlert() {
    return cy.get(this.locators.accountSettingsAlert);
  }
}
