# Playwright Test Suite with Allure Reports

This project contains automated end-to-end tests built using [Playwright](https://playwright.dev/) and integrated with [Allure Report](https://allurereport.org/) for rich, interactive, and visually stunning test reporting.

## 🚀 Features
- **Modern E2E Testing**: High-performance browser testing using Chromium, Firefox, and WebKit (via Playwright).
- **Allure Reporting**: Clean, detailed dashboards showing test execution, steps, categories, and screenshot/video attachments.
- **Preconfigured Scripts**: Simple npm commands to run tests and serve reports.

---

## 🛠️ Getting Started

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed (v18 or higher recommended).

### 2. Install Dependencies
Clone the repository and install the required npm packages:
```bash
npm install
```

### 3. Install Playwright Browsers
Download and configure the browser binaries required by Playwright:
```bash
npx playwright install
```

---

## 🧪 Running Tests

To execute all tests in the project, run:
```bash
npx playwright test
```

To run a specific test file (e.g., `test_reports.spec.ts`):
```bash
npx playwright test tests/test_reports.spec.ts
```

---

## 📊 Generating Allure Reports

The project is preconfigured to write test execution metadata into the `allure-results/` folder. You can generate and view these results using the commands below:

### Serve the Report (Recommended for Local Dev)
This builds a temporary Allure report and serves it via a local web server, opening it automatically in your default browser:
```bash
npm run allure:serve
```

### Generate a Static HTML Report
To generate a standalone HTML report folder (`allure-report/`) that can be shared or uploaded to CI/CD:
```bash
npm run allure:generate
```

### Open the Static Report
To view the previously generated static report:
```bash
npx allure open allure-report
```

---

## 📂 Project Structure

- `tests/`: Contains test specification files.
  - `BrowserContext_test.spec.ts`: Tests detailing browser context management.
  - `alerts_popups_test.spec.ts`: Tests targeting browser alerts and popups.
  - `re_run_test.spec.ts`: Test scripts configured for re-runs.
  - `test_reports.spec.ts`: Demo tests specifically for checking Allure reporting outputs.
- `playwright.config.ts`: Playwright configuration setting up browsers, headless mode, trace gathering, and the `allure-playwright` reporter.
- `package.json`: NPM package metadata and runner scripts.
