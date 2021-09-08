Feature: Validate Search functionality
    Background: Enter search request
        Given I click on search input
        When I type into search "Apple AirPods pro"
    Scenario: As a user, I should get relevant Search Results on searching for valid keywords
        When user press Enter button
        Then I assert that there are only one match
        Then I assert that the name and price match
        Then I assert that the image is present
        Then I assert that the price is present
    Scenario: As a user, I after pressing Enter button i should see relevant search result
        When user press Enter button
        Then I assert that the name and price match
    Scenario: As a user, I after click on icon magnifier i should see relevant search result
        When I click on icon magnifier
        Then I assert that the name and price match