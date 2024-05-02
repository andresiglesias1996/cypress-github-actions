require('dotenv').config();
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  //Ingresar el Project Id cloud.cypress 
  projectId: process.env.CYPRESS_PROJECT_ID,
  //Ingresar el APPLITOOLS_API_KEY 
  APPLITOOLS_API_KEY: process.env.APPLITOOLS_API_KEY,
    
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});


require('@applitools/eyes-cypress')(module);
