Feature: Forgot password modal window modal window functionality

    Scenario: Verify if I will not be able to login with with empty not data entered
        Given I open login modal
        When I click on forget password link
        Then Reset password modal window opens
