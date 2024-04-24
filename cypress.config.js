require('dotenv').config();
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  //Ingresar el Project Id cloud.cypress 
  projectId: process.env.CYPRESS_PROJECT_ID,

    
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
