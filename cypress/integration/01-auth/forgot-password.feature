Feature: Forgot Password Page

  @visit-page
  Scenario: page contain links to other auth pages
    Given user is on forgot password page
    Then page must contain link to login page
    And must contain link to signup page
