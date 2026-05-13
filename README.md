# Playwright SauceDemo Automation

A Playwright Test repository automating the Sauce Demo checkout flow using the Page Object Model (POM) pattern.
🧾 QA Automation Project (Playwright + JavaScript + POM)
🧪 End-to-End UI Test Automation Framework – SauceDemo

Designed and implemented a scalable end-to-end test automation framework using Playwright (JavaScript) following the Page Object Model (POM) design pattern to ensure maintainability, reusability, and stability of UI test cases.

## Repository Contents

- `tests/checkout.spec.js` — Primary end-to-end test covering the full user journey
- `pages/` — Page Object Model classes for the Sauce Demo pages
- `playwright.config.js` — Playwright test configuration and reporter settings
- `package.json` — Project dependencies and metadata
- `playwright-report/` — Generated HTML reports
- `test-results/` — Test artifacts and result files

## Code Structure

- `tests/`
  - `checkout.spec.js` — test scenario that drives the full purchase flow
- `pages/`
  - `LoginPage.js` — login page interactions
  - `InventoryPage.js` — product selection, cart actions, and navigation
  - `CartPage.js` — cart validation and checkout initiation
  - `CheckoutPage.js` — checkout form entry and order submission
  - `CompletePage.js` — order confirmation validation
  - `LogoutPage.js` — logout functionality

## Prerequisites

- Node.js 18 or later
- npm

## Setup

1. Install dependencies:

```bash
npm install
```

2. Install Playwright browsers:

```bash
npx playwright install
```

## Running Tests

### Run all tests

```bash
npx playwright test
```

### Run tests in headed mode

```bash
npx playwright test
```

### Run a specific test file

```bash
npx playwright test tests/checkout.spec.js --headed
```

### Show HTML report

```bash
npx playwright show-report
```

### Run Chromium only

```bash
npx playwright test --project=chromium
```

## Notes

- The current repository does not define custom npm scripts in `package.json`.
- The test uses a performance assertion to ensure the page load time is less than 5000 ms.
- `playwright.config.js` is configured to run tests in parallel and collect trace data on first retry.
- Add more tests under `tests/` and page actions under `pages/` for broader coverage.
