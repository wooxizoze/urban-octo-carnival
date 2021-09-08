Feature: Clear input button functionality
    Background: Enter search request
        Given I activate search input
        When I type text into search "Apple AirPods pro"
    Scenario: Button X clear search input
        When user click close button
        Then the input field is cleared