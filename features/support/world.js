const { setWorldConstructor, After } = require("@cucumber/cucumber");
const request = require('supertest');

const app = require('../../src/app');

let database = {
    todos: []
}

const req = request(app(database));

class World {
    constructor() {
        this.response = null
    }

    async get(url) {
       return req.get(url).then((res) => {
           this.response = res
       });
    }

    async post(url, body) {
        return req.post(url).send(body).then((res) => {
            this.response = res
        });
    }

    insert(tableName, entry) {
        database[tableName].push(entry)
    }
}

setWorldConstructor(World);

After(() => {
    database.todos = []
})