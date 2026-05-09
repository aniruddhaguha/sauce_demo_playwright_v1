class CompletePage {
  constructor(page) {
    this.page = page;

    this.confirmationMessage = '.complete-header';
  }

  async getConfirmationMessage() {
    return await this.page.textContent(this.confirmationMessage);
  }
}

module.exports = CompletePage;