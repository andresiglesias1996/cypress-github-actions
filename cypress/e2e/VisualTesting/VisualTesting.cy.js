describe('Test Ejemplo', () => {
  it('Visual Testing con selector1', () => {
    cy.visit('https://www.linkedin.com/');

    cy.wait(2000);
    // Intenta capturar una imagen de la página completa y compararla con un snapshot previamente guardado con el nombre 'home-page'
    cy.get('.nav').compareSnapshot('selector1');
    
  });

  it('Visual Testing con selector 2', () => {
    cy.visit('https://www.linkedin.com/');
    cy.wait(2000);


    // Intenta seleccionar el formulario de búsqueda de Google y capturar una imagen de ese elemento específico,
    // luego compararla con un snapshot previamente guardado con el nombre 'google-search-form'
    cy.get(':nth-child(1) > .flex-col > .input-label').compareSnapshot('selector2');
  });
});
