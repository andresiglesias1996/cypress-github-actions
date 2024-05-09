describe('Test Ejemplo', () => {
  it('Visual Testing con selector 1', () => {
    cy.visit('https://www.genexus.com/es/productos/genexus-enterprise-ai');

    cy.wait(2000);
    // Intenta capturar una imagen de la página completa y compararla con un snapshot previamente guardado con el nombre 'home-page'
    cy.compareSnapshot('home-body > main > div.sector.I135912');
    
  });

  it('Visual Testing con selector 2', () => {
    cy.visit('https://www.google.com');
    cy.wait(2000);


    // Intenta seleccionar el formulario de búsqueda de Google y capturar una imagen de ese elemento específico,
    // luego compararla con un snapshot previamente guardado con el nombre 'google-search-form'
    cy.get('form').compareSnapshot('body > main > div.sector.I135912 > div > div > section.region.I135893');
  });
});
