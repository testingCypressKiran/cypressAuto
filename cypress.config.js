const { defineConfig } = require('cypress')


module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',

  video: true,

  e2e: {

      //the property that stores the base URL and can be accessed using /
      baseUrl: 'https://www.automationexercise.com/',
      //"retries": 2, //will execute 3 times (2 retries and 1 normal)
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);

    },
  },
});
