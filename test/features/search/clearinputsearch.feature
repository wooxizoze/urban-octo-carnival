Feature: Reset button should clear data from search input

    Scenario: As a user, after click on X button, I should see empty input
        Given I activate search input
        When I type text into search "Apple AirPods pro"
        When user click close button
        Then the input field is cleared