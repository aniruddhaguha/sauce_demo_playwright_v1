class LogoutPage {
  constructor(page) {
    this.page = page;

    this.menuButton = '#react-burger-menu-btn';
    this.logoutButton = '#logout_sidebar_link';
  }

  async logout() {
    await this.page.click(this.menuButton);
    await this.page.click(this.logoutButton);
  }
}

module.exports = LogoutPage;