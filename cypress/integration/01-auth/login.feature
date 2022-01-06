Feature: Login Page
  Scenario: login page contain li
    Given user is on login page
    Then page must contain link to forgot password page
    And must contain link to signup page
