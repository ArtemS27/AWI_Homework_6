const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    viewportHeight: 780,
    viewportWidth: 1200,
  },
});
