const express = require('express')
const bodyParser = require('body-parser')

const todosApp = require('./todos')

module.exports = (database) => {
    const app = express()
    const port = 9003

    app.use(bodyParser.json())

    app.use('/todos', todosApp(database))

    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`)
    })

    return app;
};

