class LoginPage {
    constructor(page) {
      this.page = page;
      this.usernameInput = '#username';
      this.passwordInput = '#password';
      this.submitButton = '#submit';
    }
  
    async navigate() {
      await this.page.goto('https://example.com/login');
    }
  
    async login(username, password) {
      await this.page.fill(this.usernameInput, username);
      await this.page.fill(this.passwordInput, password);
      await this.page.click(this.submitButton);
    }
  }
  
  module.exports = LoginPage;
  