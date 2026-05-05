Feature: OrangeHRM Login Functionality
    Scenario: Successful login with valid credentials
      Given the user is in OrangeHRM login page
      When I enter username and password
      Then the dashboard is visible