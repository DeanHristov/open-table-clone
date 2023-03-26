import {defineConfig} from "cypress";

// OPEN issues related to the speed of our automation tests in the pipeline
// @see: https://github.com/cypress-io/cypress/issues/22868
// @see: https://github.com/cypress-io/cypress/issues/8795
export default defineConfig({
    fixturesFolder: "test/fixtures",
    screenshotsFolder: "test/cypress-screenshots",
    viewportWidth: 1980,
    viewportHeight: 1080,
    video: false,
    screenshotOnRunFailure: true,
    chromeWebSecurity: false,
    requestTimeout: 12000,
    defaultCommandTimeout: 12000,
    env: {},
    e2e: {
        // We've imported your old cypress plugins here.
        // You may want to clean this up later by importing these.
        // setupNodeEvents(on, config) {
        //   return config;
        // },
        baseUrl: "http://localhost:3000",
        specPattern: "test/e2e/**/*.spec.ts",
        supportFile: "test/support/index.ts",
    },
});
