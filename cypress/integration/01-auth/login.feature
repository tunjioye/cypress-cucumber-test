Feature: Log In Page

  @visit-page
  Scenario: page contain links to other auth pages
    Given user is on login page
    Then page must contain link to forgot password page
    And must contain link to signup page
