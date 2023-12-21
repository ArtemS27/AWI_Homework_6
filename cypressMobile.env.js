const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    viewportHeight: 896,
    viewportWidth: 414,
  }
});
