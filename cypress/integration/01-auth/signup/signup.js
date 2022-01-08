import { Before, Given, Then } from 'cypress-cucumber-preprocessor/steps'
import TEST_CONSTANTS from '../../../fixtures/test-constants.json'

Before({ tags: "@visit-page" }, () => {
  cy.visit(TEST_CONSTANTS.urls.signup_url)
});

Given('user is on signup page', () => {
  Then('page must contain link to login page', () => {
    cy.get(`a[href*="${TEST_CONSTANTS.urls.login_url}"]`).should('exist')
  })
})
