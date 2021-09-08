Feature: Login functionality with possitive scenario
    Background: Open login modal window
        Given I on a main page and open login modal
    Scenario Outline: Verify if I will be able to login with a valid username and valid password
        When I enter <email> and <password> and click submit button
        Then I should see account options with <email>

        Examples:
            | email                 | password |
            | dzm.krasnov@gmail.com | R5GO9Bsg |
