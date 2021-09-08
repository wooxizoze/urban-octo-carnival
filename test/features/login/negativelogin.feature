Feature: Negative Login functionality
    Background: Open login modal window
        Given I on a main page and open login modal
    Scenario: Verify if I will not be able to login with with empty not data entered
        When I click submit button with empty fields
        Then I should see error messages for empty email and password
