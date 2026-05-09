# Playwright SauceDemo Automation

A Playwright Test repository for automating the Sauce Demo e-commerce checkout flow using the Page Object Model (POM) pattern, with performance validation.

## Repository Description

This repository contains an end-to-end test suite that automates the complete Sauce Demo shopping workflow:

- Navigates to `https://www.saucedemo.com/`
- Logs in with standard user credentials
- Adds multiple products to the shopping cart
- Removes a product from the cart
- Proceeds through the checkout process with test data
- Validates the order confirmation message
- Logs out successfully
- Monitors and validates that the initial page load time remains under 5000 ms

## Files

- `tests/checkout.spec.js` — Main end-to-end test scenario for Sauce Demo automation
- `playwright.config.js` — Playwright configuration for browser settings and reporting
- `package.json` — Project dependencies, scripts, and metadata
- `playwright-report/` — Generated HTML report output after test execution
- `test-results/` — Stored test result artifacts and screenshots

## Code Structure

- `tests/` — Contains Playwright test files
  - `checkout.spec.js` — Complete e-commerce flow test using Page Object Model
- `pages/` — Page Object Model classes for better test maintainability
  - `LoginPage.js` — Login page interactions
  - `InventoryPage.js` — Product inventory and cart management
  - `CartPage.js` — Shopping cart operations
  - `CheckoutPage.js` — Checkout form and process
  - `CompletePage.js` — Order completion validation
  - `LogoutPage.js` — User logout functionality
- `playwright.config.js` — Test runner configuration with browser options and reporting
- `package.json` — Dependencies and npm scripts
- `playwright-report/` — HTML test reports
- `test-results/` — Test artifacts and traces

## Prerequisites

- Node.js 18 or later
- npm or yarn

## Setup

1. Clone the repository and navigate to the project directory

2. Install dependencies:
   ```bash
   npm install
   ```

3. Install Playwright browsers:
   ```bash
   npx playwright install
   ```

## Running Tests

### Run all tests
```bash
npm test
```

### Run tests in headed mode (visible browser)
```bash
npm run test:headed
```

### Run tests with Playwright UI mode
```bash
npm run test:ui
```

### View test reports
```bash
npm run report
```

### Run specific test file
```bash
npx playwright test tests/checkout.spec.js
```

### Run tests in specific browser
```bash
npx playwright test --project=chromium
```

## Test Configuration

The project is configured to:
- Run tests in parallel for faster execution
- Generate HTML reports automatically
- Capture traces on test failures for debugging
- Support multiple browsers (currently configured for Chromium)

## Performance Monitoring

The test suite includes performance validation that ensures the Sauce Demo application loads within acceptable time limits (under 5000ms).
```

## Running tests

Run the full suite:

```bash
npx playwright test
```

Run only the login test:

```bash
npx playwright test tests/login.spec.js
```

Run in headed mode for debugging:

```bash
npx playwright test tests/login.spec.js --headed
```

## Notes

- The test includes a page load performance check.
- Additional tests should be added under the `tests/` directory.
- Customize `playwright.config.js` to change browsers, timeouts, reporters, or test settings.
