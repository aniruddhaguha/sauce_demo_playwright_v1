# Playwright Test Suite

This repository contains a Playwright test project for end-to-end automation of the Sauce Demo website.

## Project details

- Framework: Playwright Test
- Test file: `tests/login.spec.js`
- Target site: `https://www.saucedemo.com/`
- Scenario: login, add items to cart, checkout, verify completion, logout

## Prerequisites

- Node.js 18+ installed
- `npm` available

## Setup

1. Install dependencies:

```bash
npm install
```

2. Install Playwright browsers (if not already installed):

```bash
npx playwright install
```

## Run tests

Execute the full suite:

```bash
npx playwright test
```

Run only the login test file:

```bash
npx playwright test tests/login.spec.js
```

Run headed mode for debugging:

```bash
npx playwright test tests/login.spec.js --headed
```

## Notes

- The test measures page load time and expects it to be under 5000 ms.
- If you need to add more tests, place them under the `tests/` folder.
- Update `playwright.config.js` for custom browser or reporter settings.
