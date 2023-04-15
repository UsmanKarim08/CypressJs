const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  e2e: {
   "baseUrl": 'https://opensource-demo.orangehrmlive.com',
    
    "viewportWidth":1920,
  "viewportHeight":1080,
  "defaultCommandTimeout": 50000,
  env:{
    'userName1' : 'Admin',
    'password1': 'admin123'
  },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
