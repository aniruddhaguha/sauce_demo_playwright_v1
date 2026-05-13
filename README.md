# Playwright SauceDemo Automation

A Playwright Test repository automating the Sauce Demo checkout flow using the Page Object Model (POM) pattern.

🧾 QA Automation Project (Playwright + JavaScript + POM)

🧪 End-to-End UI Test Automation Framework – SauceDemo

Designed and implemented a scalable end-to-end test automation framework using Playwright (JavaScript) following the Page Object Model (POM) design pattern to ensure maintainability, reusability, and stability of UI test cases.

🚀 Project Highlights
Developed a full E2E automation suite for the SauceDemo e-commerce application covering login, product sorting, cart management, checkout, and logout workflows.

Implemented Page Object Model (POM) architecture separating test logic from UI locators for better maintainability and scalability.
Built reusable page classes:
LoginPage, InventoryPage, CartPage, CheckoutPage, CompletePage, LogoutPage
Integrated Playwright Test Runner for fast, reliable, and parallel test execution.
Configured global test settings including timeouts, retries, and reporting.

⚙️ Key Features Implemented
🔐 User authentication testing (valid & invalid login scenarios)
🛒 Product selection, addition, and removal from cart
🔃 Product sorting validation (A–Z, Z–A, price low-to-high/high-to-low)
💳 End-to-end checkout flow automation
📦 Order confirmation validation
🚪 Secure logout functionality testing
📊 HTML report generation for test execution results

🧰 Tech Stack
Playwright
JavaScript (Node.js)
Page Object Model (POM)
Playwright Test Runner
HTML Reporting

🏗️ Framework Design
Modular architecture using Page Object Model
Centralized locators inside page classes
Reusable methods for UI actions
Config-driven execution using playwright.config.js
Parallel test execution for faster feedback

🧪 Testing Approach
End-to-End (E2E) testing
Functional UI testing
Regression testing support
Cross-browser execution (Chromium-based testing)
Assertion-based validation using Playwright expect()

📈 Improvements Applied
Removed flaky static waits (waitForTimeout)
Replaced with smart Playwright auto-waiting strategies
Improved stability using explicit assertions and navigation waits
Standardized project structure following QA industry practices

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
