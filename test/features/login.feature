# Feature: Login functionality

#     Background: Enter login modal window
#         Given I am on a main page
#         When I click on account option and press enter button
#     Scenario: Verify if a user will be able to login with a valid username and valid password
#         When I enter email and password
#         Then I should see account options "Аккаунт"
#     Scenario: Verify the login page for both, when the fields is blank and Submit button is clicked
#         When I leave email and password empty
#         Then I should see error messages
#     Scenario: Verify the login modal closed on X button
#         When I click on close button
#         Then modal window closed 