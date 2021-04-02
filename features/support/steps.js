// features/support/steps.js
const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert").strict;

Given("I have following todos:", function(todos) {
    todos.hashes().forEach((todo) => {
        this.insert("todos", {
            id: parseInt(todo.Id),
            description: todo.Description
        })
    })
})

When("I list task", function () {
    return this.get("/todos");
});

When("I post following todo:", function (request) {
    return this.post("/todos", JSON.parse(request));
});


Then("the response should be:", function (response) {
    assert.deepEqual(JSON.parse(response), this.response.body);
});