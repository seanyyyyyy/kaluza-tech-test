Feature: Estimate the age of a person based on a first name - error scenarios

  @testing @name
  Scenario: Estimate age for a name with invalid characters
    Given a name "12345!@#$%^&*()"
    When I request estimated age
    Then I should receive a success response
    And the response body should include a null age
    And the response body should include a zero count value

  Scenario: Estimate age with empty name
    Given a name ""
    When I request estimated age
    Then I should receive a success response
    And the response body should include a null age
    And the response body should include a zero count value

  @testing @name
  Scenario: Estimate age with valid name and invalid localisation
    Given a name "sean" and country code "INVALID"
    When I request estimated age and country
    Then I should receive a success response
    And the response body should include a null age
    And the response body should include a zero count value

  Scenario: Estimate age of too many names (11)
