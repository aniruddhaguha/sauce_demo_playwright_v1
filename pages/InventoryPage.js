class InventoryPage {
  constructor(page) {
    this.page = page;

    this.backpack = '#add-to-cart-sauce-labs-backpack';
    this.bikeLight = '#add-to-cart-sauce-labs-bike-light';
    this.tshirt = '#add-to-cart-sauce-labs-bolt-t-shirt';
    this.jacket = '#add-to-cart-sauce-labs-fleece-jacket';

    this.removeTshirt = '#remove-sauce-labs-bolt-t-shirt';
    this.removeJacket = '#remove-sauce-labs-fleece-jacket';

    this.cartButton = '.shopping_cart_link';
    this.menuButton = '#react-burger-menu-btn';
    this.logoutButton = '#logout_sidebar_link';
  }

  async addProducts() {
    await this.page.click(this.backpack);
    await this.page.click(this.bikeLight);
    await this.page.click(this.tshirt);
    await this.page.click(this.jacket);
  }

  async removeProduct() {
    await this.page.click(this.removeTshirt);
    await this.page.click(this.removeJacket);
  }

  async openCart() {
    await this.page.click(this.cartButton);
  }

  async logout() {
    await this.page.click(this.menuButton);
    await this.page.click(this.logoutButton);
  }
}

module.exports = InventoryPage;