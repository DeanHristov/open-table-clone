import "@testing-library/cypress/add-commands";
import "./commands";
// load type definitions that come with Cypress module
/// <reference types="cypress" />

// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Must be declared global to be detected by typescript (allows import/export)
declare global {
  interface Window {
    msw: any;
  }
 
  namespace Cypress { 
    interface Chainable {}
  }
}
