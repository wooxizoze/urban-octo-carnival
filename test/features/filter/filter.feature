Feature: Filter functionality

    Scenario Outline: Validate filter search results for laptops
        Given I am on notebooks product page
        When I filter by <status> and <brand> and <videocard> and <processor>
        Then I assert that there are only one match
        Then I assert that the specified parameters match
        Then I assert that the image is present
        Then I assert that the price is present
        Examples:
            | status    | brand | videocard            | processor     |
            | В наличии | Apple | AMD Radeon Pro 5500M | Intel Core i7 |

    Scenario Outline: Validate filter results for mobile phones
        Given I am on mobile product page
        When I filter by parameters <mobile_processor> and <diagonal> and <color> and <memory>
        Then I assert that there are only one match
        Then I assert that the specified parameters match
        Then I assert that the image is present
        Then I assert that the price is present
        Examples:
            | mobile_processor | diagonal | color | memory |
            | Apple A14 Bionic | 6,1      | белый | 128 Гб |