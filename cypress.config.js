const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://institutoweb.com.ar/test/test2/checkout",
    defaultCommandTimeout: 10000,
    setupNodeEvents(on, config) {

    },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: "./results/reports"
  },
  videosFolder: "results/videos",
  screenshotsFolder: "results/screenshots",
}
});