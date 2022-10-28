class headerLocator {
  constructor() {
    this.loginRegisterBtn = 'ul[id="customer_menu_top"] li a';
  }
}

export default class Header {
  constructor() {
    this.locators = new headerLocator();
  }

  getLoginRegisterButton() {
    return cy.get(this.locators.loginRegisterBtn);
  }
}
