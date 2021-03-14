const { setWorldConstructor } = require("@cucumber/cucumber");
const request = require('supertest');

const app = require('../../src/app');
class World {
    constructor() {
        this.database = {
            todos: []
        }
        this.req = request(app(this.database));
        this.response = null
    }

    async get(url) {
       return this.req.get(url).then((res) => {
           this.response = res
       });
    }


    insert(tableName, entry) {
        this.database[tableName].push(entry)
    }
}

setWorldConstructor(World);