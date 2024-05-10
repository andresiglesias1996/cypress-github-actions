require('dotenv').config();
const { defineConfig } = require("cypress");

//complemento de diferenciación de imágenes 
const getCompareSnapshotsPlugin = require('cypress-image-diff-js/plugin');

module.exports = defineConfig({
  //Ingresar el Project Id cloud.cypress 
  projectId: process.env.CYPRESS_PROJECT_ID,


  e2e: {

    setupNodeEvents(on, config) {
      // complemento de diferenciación de imágenes 
      return getCompareSnapshotsPlugin(on, config);
    },

    viewportHeight: 800,
    viewportWidth: 1200,
  },
  screenshotOnRunFailure: true,
  video: true,
});


