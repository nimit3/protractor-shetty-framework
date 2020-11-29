Feature: validate angular website
    @AngularTesting @smoke
    Scenario Outline: passing hello word
        Given I will visit "https://angularjs.org" website
        When I click on the link
        And  you will navigate to new angular page
        Then you will enter "<keyword>" word in search box
        Examples:
            | keyword     |
            | hello       |
            | cheat sheet |

