class InventoryPage {

  constructor(page) {
    this.page = page;

    // Products
    this.addBackpack = '#add-to-cart-sauce-labs-backpack';
    this.addBikeLight = '#add-to-cart-sauce-labs-bike-light';
    this.addBoltTshirt = '#add-to-cart-sauce-labs-bolt-t-shirt';
    this.addFleeceJacket = '#add-to-cart-sauce-labs-fleece-jacket';

    // Remove
    this.removeBoltTshirt = '#remove-sauce-labs-bolt-t-shirt';
    this.removeFleeceJacket = '#remove-sauce-labs-fleece-jacket';

    // Cart
    this.cartIcon = '.shopping_cart_link';

    // Sort
    this.sortDropdown = '.product_sort_container';

    // Menu
    this.menuButton = '#react-burger-menu-btn';
    this.logoutLink = '#logout_sidebar_link';
  }

  // ADD PRODUCTS
  async addProducts() {
    await this.page.click(this.addBackpack);
    await this.page.click(this.addBikeLight);
    await this.page.click(this.addBoltTshirt);
    await this.page.click(this.addFleeceJacket);
  }

  // REMOVE PRODUCTS
  async removeProducts() {
    await this.page.click(this.removeBoltTshirt);
    await this.page.click(this.removeFleeceJacket);
  }

  // CART
  async openCart() {
    await this.page.click(this.cartIcon);
  }

  // SORT
  async sortProducts(option) {
    await this.page.selectOption(this.sortDropdown, option);
  }

  // LOGOUT
  async logout() {
    await this.page.click(this.menuButton);
    await this.page.click(this.logoutLink);
  }
}

module.exports = InventoryPage;