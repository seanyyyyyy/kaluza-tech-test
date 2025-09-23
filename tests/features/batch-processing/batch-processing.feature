Feature: Estimate the age of multiple names

  @testing @batch
  Scenario: Estimate age of multiple names (10)
    Given a batch of 10 names
    When I request estimate multiple ages
    Then I should receive a batch success response
    And the response body should include the names
    And the response body should include numeric ages
    And the response body should include non-zero count values

  Scenario: Estimate age of multiple names (10) with localisation

  Scenario: Estimate age of single name in an array (1)

  Scenario: Estimate age of empty array (0)

  Scenario: Estimate age of too many names (11)
