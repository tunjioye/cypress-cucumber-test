Feature: Sign Up Page

  @visit-page
  Scenario: page contain links to login page
    Given user is on signup page
    Then page must contain link to login page
