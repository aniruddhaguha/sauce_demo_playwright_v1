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

   //goto
  await loginPage.goto('https://www.saucedemo.com/');

  // Login
  await loginPage.login('standard_user', 'secret_sauce');

  // Sorting
  await inventoryPage.sortProducts('lohi');
  await inventoryPage.sortProducts('hilo');
  await inventoryPage.sortProducts('az');
  await inventoryPage.sortProducts('za');

  // Add products
  await inventoryPage.addProducts();

  // Remove products
  await inventoryPage.removeProducts();

  // Cart
  await inventoryPage.openCart();

  // Checkout
  await cartPage.checkout();

  // Fill form
  await checkoutPage.fillInformation('Ani', 'Bro', '12345');
  await checkoutPage.continueCheckout();
  await checkoutPage.finishCheckout();

  // Validate
  const message = await completePage.getConfirmationMessage();
  expect(message).toBe('Thank you for your order!');

  console.log('Order completed successfully');

  // LOGOUT
  await logoutPage.logout();
  console.log('Successfully logged out');

});