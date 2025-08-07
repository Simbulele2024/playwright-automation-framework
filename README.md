# Playwright Automation Framework

This project demonstrates a simple Playwright JS test framework covering both **UI and API test automation**.

---

## 🚀 Project Features

- ✅ UI Tests using Playwright (target: [SauceDemo](https://www.saucedemo.com/))
- ✅ API Tests using Playwright (target: [Restful Booker](https://restful-booker.herokuapp.com/))
- ✅ Covers CRUD operations with DELETE
- ✅ Test Data Management included
- ✅ GitHub Actions CI/CD Integration
- ✅ Easy test reporting (supports Playwright HTML report)
- 🏅 Bonus: Ready for Monocart Reporter integration
---

## 📁 Project Structure

playwright-automation-framework/
│
├── tests/
│ ├── ui/ # UI test cases (SauceDemo)
│ └── api/ # API test cases (Restful-Booker)
│
├── fixtures/ # Custom test fixtures
├── utils/ # Helper functions & data utils
├── playwright.config.ts
├── .github/workflows/ # GitHub Actions CI workflow
└── package.json


---

## 🧪 Running Tests

### 🔹 Run All Tests

```bash
npx playwright test
---

## ⚙️ CI/CD with GitHub Actions

- Tests run automatically on **push** or **pull request** to the repository.
- GitHub Actions workflow is defined in `.github/workflows/playwright.yml`.
- Test reports and artifacts can be uploaded for review and traceability.
## Repository

You can access the full project here: [playwright-automation-framework](https://github.com/Simbulele2024/playwright-automation-framework)
