Feature: Search function
    Background: I am on main page
        Given I am on main page
        When I type into search "Apple AirPods pro"
    Scenario: Icon magnifier should send POST request
        When I click on icon magnifier
