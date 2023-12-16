const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  /*env: {
    viewportHeight: 896,
    viewportWidth: 414,
  },*/
});
