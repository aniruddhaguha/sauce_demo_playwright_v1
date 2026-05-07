# Playwright SauceDemo Automation

A simple Playwright Test repository for automating a Sauce Demo checkout flow and validating page performance.

## Repository description

This repo contains a functional end-to-end test that:
- opens `https://www.saucedemo.com/`
- logs in with standard credentials
- adds products to the cart
- completes checkout with test data
- verifies the order confirmation message
- logs out at the end
- checks that the initial page load time stays under 5000 ms

## Files

- `tests/login.spec.js` — main test scenario for Sauce Demo E2E automation
- `playwright.config.js` — Playwright configuration for browser and reporter settings
- `package.json` — project dependencies and metadata
- `playwright-report/` — generated report output when tests are run
- `test-results/` — stored test result artifacts

## Code structure

- `tests/` - contains Playwright test files and scenario implementations
- `tests/login.spec.js` - single end-to-end test covering login, add-to-cart, checkout, and logout flows
- `playwright.config.js` - configuration for Playwright test runner, browser options, and reporting
- `package.json` - project dependencies, scripts, and metadata
- `playwright-report/` - output folder for HTML test reports generated after execution
- `test-results/` - folder for raw test result artifacts and logs

## Prerequisites

- Node.js 18 or later
- npm

## Setup

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
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
