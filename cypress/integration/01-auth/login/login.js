import { Before, Given, Then, And } from 'cypress-cucumber-preprocessor/steps'
import TEST_CONSTANTS from '../../../fixtures/test-constants.json'

Before({ tags: "@visit-page" }, () => {
  cy.visit(TEST_CONSTANTS.urls.login_url)
});

Given('user is on login page', () => {
  Then('page must contain link to forgot password page', () => {
    cy.get(`a[href*="${TEST_CONSTANTS.urls.forgot_password_url}"]`).should('exist')
  })

  And('must contain link to signup page', () => {
    cy.get(`a[href*="${TEST_CONSTANTS.urls.signup_url}"]`).should('exist')
  })
})
