Feature: Negative Login Function
    Background: Open login modal window
        Given I on a main page and open login modal
    Scenario: Verify the login page for both, when the field is blank and Submit button is clicked.
        When I click submit button with empty fields
        Then I should see error messages for empty email and password
