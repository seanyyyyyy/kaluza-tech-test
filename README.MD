### Documentation
* [Test Plan](./test-plan.md)
* [Cucumber scenarios](./tests/features)

### Run Automated Tests
1. Pull repo
2. `npm install`
3. `npx cucumber-js --tags "@testing"`

Note: only implemented a subset of the test plan scenarios (tagged with `@testing`)
- Estimate age for a first name
- Estimate age for a name and localisation
- Estimate age for a name with invalid characters
- Estimate age with valid name and invalid localisation
- Estimate age of multiple names (10)

