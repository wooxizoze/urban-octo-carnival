Feature: Filter functionality

    Scenario Outline: Validate filter results for mobile phones
        Given I am on mobile product page
        When I filter by parameters <mobile_processor> and <diagonal> and <color> and <memory>
        Then I assert that there are only one match
        Then I assert that the specified parameters match
        Then I assert that the image is present
        Examples:
            | mobile_processor | diagonal | color | memory |
            | Apple A14 Bionic | 6,1      | белый | 128 Гб |