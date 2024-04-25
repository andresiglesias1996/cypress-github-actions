# Cypress GitHub Actions
Este repositorio contiene un proyecto de automatización de pruebas utilizando Cypress y GitHub Actions, con integración adicional de Cypress Dashboard.

##Instalar Dependencias:
Instala las dependencias del proyecto utilizando:
`npm install`

## Ejecutar Pruebas Cypress Localmente
Para ejecutar las pruebas Cypress localmente, utilizado:
`npx cypress run`     # Para ejecutar las pruebas en modo headless
`npx cypress open `   # Para abrir el Cypress Test Runner en modo interactivo


## .ENV
El archivo .env es un archivo de configuración que se utiliza para almacenar variables de entorno en un proyecto. Estas variables pueden contener información sensible, como contraseñas, tokens de acceso.
Al utilizar un archivo .env, puedes mantener separada la información confidencial de tu código fuente principal, lo que mejora la seguridad de tu proyecto. Además, al no incluirlo en el repositorio público, evitas exponer información sensible a otros usuarios o colaboradores.

1. Crea un archivo `.env` en la raíz de tu proyecto.

#### Configuración del `projectIdy` `recordKey`.
En el archivo de configuración de Cypress (`cypress.config.js`), se utiliza el Project ID de tu proyecto en Cypress Cloud. Esto te permitirá asociar tus pruebas con el proyecto correspondiente en Cypress Dashboard.

1. En el archivo `.env` agregue el valor CYPRESS_PROJECT_ID= "tu_project_id_aqui"

## Github-Action
Si desea evitar esto, tanto el `projectId` `como recordKeyse` pueden proporcionar como variables de entorno utilizando https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions.
 env:
  Cypress Cloud record key como variable `CYPRESS_RECORD_KEY: ${{ secrets.CYPRESS_RECORD_KEY }}`
 Cypress Cloud project ID como variable `CYPRESS_PROJECT_ID: ${{ secrets.PROJECT_ID }}`
