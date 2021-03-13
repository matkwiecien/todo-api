const express = require('express')
const app = express()
const port = 9000

app.get('/todos', (req, res) => {
    res.json({
        _embedded: {
            todos: []
        },
        _links: {
            self: {
                href: "http://localhost:9000/todos"
            }
        }
    })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})


module.exports = app;