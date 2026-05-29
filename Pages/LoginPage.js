const { expect } = require('@playwright/test');

class LoginPage {
  constructor(page) {
    this.page = page;
    this.loginBtn = page.locator('#login');
    this.username_Input_Field = page.locator('#userName');
    this.password_Input_Field = page.locator('#password');
    this.validatelogoutBtn = page.locator('//button[text()="Logout"]');
    this.clickonlogoutBtn=page.locator('#submit');
    this.loggedUserName = page.locator('#userName-value');
    
  }

  async goto() {
    await this.page.goto('/');
    await this.page.locator('//h5[text()="Book Store Application"]').click();
  }

  async login(Username, Password) {
    await this.loginBtn.click();
    await this.username_Input_Field.fill(Username);
    await this.password_Input_Field.fill(Password);
    await this.loginBtn.click();
  }

  async validateLogin(Username) {
    await expect(this.loggedUserName).toHaveText(Username);
    await expect(this.validatelogoutBtn).toHaveText('Logout');
  }

  async logout() {
    await this.clickonlogoutBtn.click();
  }
}

module.exports = LoginPage;
