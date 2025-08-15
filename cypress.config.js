const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    video: true,
    viewportHeight: 1080,
    viewportWidth: 1920,
    watchForFileChanges: false,
    baseUrl: 'https://demoqa.com',
    specPattern: "cypress/e2e/**/*.feature",

    setupNodeEvents(on, config) {
      const cucumber = require("cypress-cucumber-preprocessor").default;
      on("file:preprocessor", cucumber());
    },
  },
});