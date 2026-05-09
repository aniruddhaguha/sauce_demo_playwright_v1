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

  // Performance Measurement
  const startTime = Date.now();

  await loginPage.gotoLoginPage();

  const loadTime = Date.now() - startTime;

  console.log(`Page Load Time: ${loadTime} ms`);

  expect(loadTime).toBeLessThan(5000);

  // Login
  await loginPage.login('standard_user', 'secret_sauce');await loginPage.login('standard_user', 'secret_sauce');
  await page.waitForTimeout(2000);

  // Add Products
  await inventoryPage.addProducts();
  await page.waitForTimeout(2000);

  // Remove Products
  await inventoryPage.removeProduct();
  await page.waitForTimeout(2000);

  // Open Cart
  await inventoryPage.openCart();
  await page.waitForTimeout(2000);

  // Checkout
  await cartPage.checkout();
  await page.waitForTimeout(2000);

  // Fill Information
  await checkoutPage.fillInformation('Ani', 'Bro', '12345');
  await page.waitForTimeout(2000);

  // Continue Checkout
  await checkoutPage.continueCheckout();
  await page.waitForTimeout(2000);

  // Finish Checkout
  await checkoutPage.finishCheckout();
  await page.waitForTimeout(2000);  

  // Validation
  const message = await completePage.getConfirmationMessage();

  expect(message).toBe('Thank you for your order!');

  console.log('Order completed successfully');

  await page.waitForTimeout(2000);

   // Logout
  const logoutPage = new LogoutPage(page);

  await logoutPage.logout();

  console.log('Successfully logged out');

});