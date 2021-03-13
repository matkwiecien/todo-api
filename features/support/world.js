const { setWorldConstructor } = require("@cucumber/cucumber");
const request = require('supertest');

const app = require('../../src/app');
class World {
    constructor() {
        this.req = request(app);
        this.response = null
    }

    async get(url) {
       return this.req.get(url).then((res) => {
           this.response = res
       });
    }
}

setWorldConstructor(World);