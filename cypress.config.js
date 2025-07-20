const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '4n1r6g',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
