const { test, expect } = require('@playwright/test');

const LoginPage = require('../pages/LoginPage');
const InventoryPage = require('../pages/InventoryPage');
const CartPage = require('../pages/CartPage');
const CheckoutPage = require('../pages/CheckoutPage');
const CompletePage = require('../pages/CompletePage');
const LogoutPage = require('../pages/LogoutPage');

test('SauceDemo E2E POM Flow', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);
  const completePage = new CompletePage(page);
  const logoutPage = new LogoutPage(page);

  // Open website
  await loginPage.gotoLoginPage();

  // Login
  await loginPage.login('standard_user', 'secret_sauce');

  // Add products
  await inventoryPage.addProducts();

  // Remove one product
  await inventoryPage.removeProduct();

  // Open cart
  await inventoryPage.openCart();

  // Checkout
  await cartPage.checkout();

  // Fill checkout form
  await checkoutPage.fillInformation('Ani', 'Bro', '12345');

  // Continue checkout
  await checkoutPage.continueCheckout();

  // Finish order
  await checkoutPage.finishCheckout();

  // Validate confirmation
  const message = await completePage.getConfirmationMessage();

  expect(message).toBe('Thank you for your order!');

  console.log('Order completed successfully');

  // Logout
  await logoutPage.logout();

  console.log('Successfully logged out');

});