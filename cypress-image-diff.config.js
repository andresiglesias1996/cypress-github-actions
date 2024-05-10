// cypress-image-diff.config.js
const config = {
    failureThreshold: 0.05, // Permitiría una diferencia de hasta el 5%
    failureThresholdType: 'percent', // Indica que el umbral es un porcentaje
     //dónde se guardan todas las capturas de pantalla
    ROOT_DIR: 'cypress',
  //SCREENSHOTS_DIR: 'screenshots'
  };
  
  module.exports = config;