import { Given, Then } from 'cypress-cucumber-preprocessor/steps'
import TEST_CONSTANTS from '../../fixtures/test-constants.json'

Given('user is on login page', () => {
  cy.visit(TEST_CONSTANTS.urls.login_url)
})
