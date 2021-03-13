// features/support/steps.js
const { When, Then } = require("@cucumber/cucumber");
const assert = require("assert").strict;

When("I list task", function () {
    return this.get("/todos");
});

Then("the response should be:", function (response) {
    assert.deepEqual(JSON.parse(response), this.response.body);
});