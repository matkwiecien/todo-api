const express = require('express')

const todosRepository = {
    database: null,
    addTodo(description) {
        this.database.todos.push({
            id: todos.length + 1,
            description
        })
    },

    getTodos() {
        return [...this.database.todos]
    }
}

const decorateTodo = (todo) => ({
    ...todo,
    _links: {
        self: {
            href: `http://localhost:9000/todos/${todo.id}`
        }
    }
})

module.exports = (database) => {
    todosRepository.database = database;

    const app = express()
    const port = 9000

    app.get('/todos', (req, res) => {
        res.json({
            _embedded: {
                todos: todosRepository.getTodos().map(decorateTodo)
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

    return app;
};