class CheckoutPage {
  constructor(page) {
    this.page = page;

    this.firstName = '#first-name';
    this.lastName = '#last-name';
    this.postalCode = '#postal-code';

    this.continueButton = '#continue';
    this.finishButton = '#finish';
  }

  async fillInformation(first, last, zip) {
    await this.page.fill(this.firstName, first);
    await this.page.fill(this.lastName, last);
    await this.page.fill(this.postalCode, zip);
  }

  async continueCheckout() {
    await this.page.click(this.continueButton);
  }

  async finishCheckout() {
    await this.page.click(this.finishButton);
  }
}

module.exports = CheckoutPage;