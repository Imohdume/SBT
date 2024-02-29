const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Marketplace Regression report %0D%0A QA Engineer: Imohdume %0D%0A Date: 16 Feb 2024',
    embeddedScreenshots: true,
    reportFilename: 'Check 1',
    inlineAssets: true,
    consoleReporter: 'rock 1',
    saveAllAttempts: false,
    overwrite: false,
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});