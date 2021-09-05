Feature: Search function
    Background: Enter search request
        Given I click on search input
        When I type into search "Apple AirPods pro"
    Scenario: Search with given parameters
    # Then I assert that there are only one match
    #         Then I assert that the specified parameters match
    #         Then I assert that the image is present
    #         Then I assert that the price is present
    Scenario: Button X clear search input
        When user click on X button
        Then search input becomes empty
    Scenario: Enter button should send search request
        When user press Enter button
    #         Then POST search request sends
    Scenario: Icon magnifier should send search request
        When I click on icon magnifier
#         Then POST search request should send