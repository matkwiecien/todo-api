const express = require('express')

const todosApp = require('./todos')

module.exports = (database) => {
    const app = express()
    const port = 9000

    app.use('/todos', todosApp(database))

    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`)
    })

    return app;
};