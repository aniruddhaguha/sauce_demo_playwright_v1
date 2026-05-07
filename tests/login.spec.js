const { test, expect } = require('@playwright/test');

test('SauceDemo E2E flow with performance check', async ({ page }) => {

  const startTime = Date.now();

  await page.goto('https://www.saucedemo.com/', {
  waitUntil: 'domcontentloaded'
  });

  const loadTime = Date.now() - startTime;

  console.log(`Page Load Time: ${loadTime} ms`);
  expect(loadTime).toBeLessThan(5000);

  // Login
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
  await page.waitForTimeout(2000);

  // Add items
 await page.click('#add-to-cart-sauce-labs-backpack');
 await page.click('#add-to-cart-sauce-labs-bike-light');
 await page.click('#add-to-cart-sauce-labs-bolt-t-shirt');
 await page.click('#add-to-cart-sauce-labs-fleece-jacket');
 await page.click('#add-to-cart-sauce-labs-onesie');
 await page.waitForTimeout(2000);

  // REMOVE items
  await page.click('#remove-sauce-labs-bolt-t-shirt');
  await page.click('#remove-sauce-labs-fleece-jacket');
  await page.click('#remove-sauce-labs-onesie');    
  await page.waitForTimeout(2000);
  
  // Cart
  await page.click('.shopping_cart_link');
  await page.waitForTimeout(2000);

  // Checkout
  await page.click('#checkout');
  await page.waitForTimeout(2000);

  await page.fill('#first-name', 'Ani');
  await page.fill('#last-name', 'Bro');
  await page.fill('#postal-code', '12345');
  await page.waitForTimeout(2000);

  await page.click('#continue');
  await page.waitForTimeout(2000);

  // Finish
  await page.click('#finish');
  await page.waitForTimeout(1000);

  const confirmationMessage = await page.textContent('.complete-header');
  expect(confirmationMessage).toBe('Thank you for your order!');
  await page.waitForTimeout(1000); 

  await page.click("#react-burger-menu-btn"); 
  await page.waitForTimeout(2000); 

  await page.click("#logout_sidebar_link"); 
  await page.waitForTimeout(1000); 
  console.log("Successfully logged out");

});