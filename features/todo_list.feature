# features/simple_math.feature
Feature: Todos CRUD
  As a user
  I want to manage my todos

  Scenario: List all todos
    Given I have following todos:
    | Id | Description |
    | 1  | Buy milk    |
    | 2  | Tidy room   |
    When I list task
    Then the response should be:
    """
    {
      "_embedded": {
        "todos": [
          {
            "id": 1,
            "description": "Buy milk",
            "_links": {
              "self": {
                "href": "http://localhost:9000/todos/1"
              }
            }
          },
          {
            "id": 2,
            "description": "Tidy room",
            "_links": {
              "self": {
                "href": "http://localhost:9000/todos/2"
              }
            }
          }
        ]
      },
      "_links": {
        "self": {
          "href": "http://localhost:9000/todos"
        }
      }
    }
    """

  Scenario: Add todo to list
    When I post following todo:
    """
    {
      "description": "Do exercises"
    }
    """
    Then the response should be:
    """
    {
      "id": 1,
      "description": "Do exercises",
      "_links": {
        "self": {
          "href": "http://localhost:9000/todos/1"
        }
      }
    }
    """