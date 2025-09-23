Feature: Estimate the age of a person based on a first name - valid paths

  @testing @name
  Scenario: Estimate age for a first name
    Given a name "sean"
    When I request estimated age
    Then I should receive a success response
    And the response body should include the name
    And the response body should include a numeric age
    And the response body should include a count value

  Scenario: Estimate age for a first name with diacritics

  Scenario: Estimate age for a full name

  @testing @name
  Scenario: Estimate age for a name and localisation
    Given a name "sean" and country code "US"
    When I request estimated age and country
    Then I should receive a success response
    And the response body should include the name
    And the response body should include a numeric age
    And the response body should include the country_id
    And the response body should include a count value
