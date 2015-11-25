Feature: Signing up

  Background: I have no account
    Given I have a new user registration data

  @javascript
  Scenario: Unsuccessful signup
    Given I visit the signup page
    When I submit invalid signup information
    Then I see an signup error message

  @javascript
  Scenario: Successful signup
    Given I visit the signup page
    When I submit valid signup information
    Then I do not see an signup error message
    And I see link to profile page
    And I see signout link
    And I see success signup message
   Then I got signup mail message

  @wip
  Scenario: Confirm email
      Given Successful signup
        And I got signup mail message
       When I click confirm button
       Then I see success email confirm message


