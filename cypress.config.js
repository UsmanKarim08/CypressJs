const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  e2e: {
    baseUrl: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
    
    "viewportWidth":1920,
  "viewportHeight":1080,
  "defaultCommandTimeout": 50000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
