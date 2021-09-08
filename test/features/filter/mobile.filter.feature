Feature: Filter functionality on mobile page

    Scenario Outline: Filter results for mobile phones page displayed should be relevant to filter keyword
        Given I am on mobile product page
        When I filter on mobile product page by parameters <processor> and <diagonal> and <color> and <memory>
        Then I assert on mobile product page that there are only one match
        Then I assert on mobile product page that the specified parameters match
        Then I assert on mobile product page that the image is present
        Examples:
            | processor        | diagonal | color | memory |
            | Apple A14 Bionic | 6,1      | белый | 128 Гб |