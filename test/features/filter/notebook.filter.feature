Feature: Filter functionality on notebook page

    Scenario Outline: Validate filter search results for laptops
        Given I am on notebooks product page
        When I filter on notebooks product page by <status> and <brand> and <videocard> and <processor>
        Then I assert on notebooks product that there are only one match
        Then I assert on notebooks product that the specified parameters match
        Then I assert on notebooks product that the image is present
        Then I assert on notebooks product that the price is present
        Examples:
            | status    | brand | videocard            | processor     |
            | В наличии | Apple | AMD Radeon Pro 5500M | Intel Core i7 |