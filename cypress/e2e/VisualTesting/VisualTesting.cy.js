describe('Test Ejemplo', () => {
  beforeEach(() => {
      // Start Applitools Visual AI Test
      cy.eyesOpen({
     // appName se utiliza para definir el nombre de la aplicación en Applitools
          appName: 'Nombre de la APP',
     // testName se utiliza para definir el nombre de la prueba actual en Applitools, 
     // y se toma del título de la prueba en Cypress usando Cypress.currentTest.title
          testName: Cypress.currentTest.title,
      })
  })
  it('Soy un Test', () => {
      cy.visit('https://www.netflix.com/');

      // Full Page - Visual AI Assertion
      cy.eyesCheckWindow({
        // etiquetar la captura de pantalla 
         tag: "Login page Netflix"
         
      });
      
  })
  afterEach(() => {
      // End Applitools Visual AI Test
      cy.eyesClose()
  })
})

