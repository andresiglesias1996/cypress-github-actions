describe('Test Ejemplo', () => {
  it('Visual Testing', () => {
    cy.visit('https://www.google.com');

    // Intenta capturar una imagen de la página completa y compararla con un snapshot previamente guardado con el nombre 'home-page'
    cy.compareSnapshot('home-page');
  });

  it('Visual Testing con selector', () => {
    cy.visit('https://www.google.com');

    // Intenta seleccionar el formulario de búsqueda de Google y capturar una imagen de ese elemento específico,
    // luego compararla con un snapshot previamente guardado con el nombre 'google-search-form'
    cy.get('form').compareSnapshot('google-search-form');
  });
});
