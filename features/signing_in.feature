Feature: Signing in

  @watch
  @javascript
  Scenario: Unsuccessful signin
    Given I visit the signin page
    When I set "email" to "error@host.com"
    When I set "password" to "wrongpass"
    When I click "Login" button
    Then I see an error message

  @javascript
  Scenario: Successful signin
    Given I visit the signin page
    And I have a user account
    When I submit valid signin information
    Then I see signout link
    And I see welcome page