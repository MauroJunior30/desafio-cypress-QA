const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  defaultCommandTimeout: 10000, // espera 10 segundos para comandos como cy.get() 
  pageLoadTimeout: 15000, // espera 15 segundos para carregar uma página

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
