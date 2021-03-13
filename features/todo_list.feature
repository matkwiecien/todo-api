# features/simple_math.feature
Feature: Todos CRUD
  As a user
  I want to manage my todos

  Scenario: List all todos
    When I list task
    Then the response should be:
    """
    {
      "_embedded": {
        "todos": []
      },
      "_links": {
        "self": {
          "href": "http://localhost:9000/todos"
        }
      }
    }
    """
