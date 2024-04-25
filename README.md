# Cypress GitHub Actions
Este repositorio contiene un proyecto de automatización de pruebas utilizando Cypress y GitHub Actions, con integración adicional de Cypress Dashboard.

## Instalar Dependencias:
Instala las dependencias del proyecto utilizando:
```
npm install
```
## Ejecutar Pruebas Cypress Localmente
Para ejecutar las pruebas Cypress localmente:
#### Para ejecutar las pruebas en modo headless
```
npx cypress run
```
#### Para abrir el Cypress Test Runner en modo interactivo
```
npx cypress open
```

## .ENV
El archivo .env es un archivo de configuración que se utiliza para almacenar variables de entorno en un proyecto. Estas variables pueden contener información sensible, como contraseñas, tokens de acceso.
Al utilizar un archivo .env, puedes mantener separada la información confidencial de tu código fuente principal, lo que mejora la seguridad de tu proyecto. Además, al no incluirlo en el repositorio público, evitas exponer información sensible a otros usuarios o colaboradores.

1. Crea un archivo `.env` en la raíz de tu proyecto.

#### Configuración del `projectIdy` `recordKey`.
En el archivo de configuración de Cypress (`cypress.config.js`), se utiliza el Project ID de tu proyecto en Cypress Cloud. Esto te permitirá asociar tus pruebas con el proyecto correspondiente en Cypress Dashboard.

1. En el archivo `.env` agregue el valor CYPRESS_PROJECT_ID= "tu_project_id_aqui"

## Github-Action
Si desea evitar esto, tanto el `projectId` `como recordKeyse` pueden proporcionar como variables de entorno utilizando [secrets](https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions) .
EL flujo de trabajo `cypress.yml` esta configurado
```yaml
 env:
 Cypress Cloud record key como variable `CYPRESS_RECORD_KEY: ${{ secrets.CYPRESS_RECORD_KEY }}`
 Cypress Cloud project ID como variable `CYPRESS_PROJECT_ID: ${{ secrets.PROJECT_ID }}`
```

#### Configuración de ejecuciones.
EL flujo de trabajo `cypress.yml` está configurado para ejecutarse tanto en respuesta a push al repositorio como en un horario programado específico. Esto nos permite mantener un monitoreo claro sobre le proyecto.
```yaml
on:
  push:
  schedule:
    # Programa la ejecución de lunes a viernes a las 8 a.m.
    - cron: '0 8 * * 1-5'
```
