Feature: OrangeHRM Login Functionality
    Scenario: Successful login with valid credentials
      Given the user is in OrangeHRM login page
      When I enter username "Admin" and password "admin123"
      Then the dashboard is visible