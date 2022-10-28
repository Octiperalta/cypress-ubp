class homeLocator {
  constructor() {
    this.navbar = "#categorymenu nav";
  }
}

export default class Home {
  constructor() {
    this.locators = new homeLocator();
  }

  getNavbar() {
    return cy.get(this.locators.navbar);
  }
}
