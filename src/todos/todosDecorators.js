const decorateTodoWithHATEOS = (todo) => ({
    ...todo,
    _links: {
        self: {
            href: `http://localhost:9000/todos/${todo.id}`
        }
    }
})

const decorateTodosWithHATEOS = (todos) => ({
    _embedded: {
        todos: todos.map(decorateTodoWithHATEOS)
    },
    _links: {
        self: {
            href: "http://localhost:9000/todos"
        }
    }
})

module.exports = {
    decorateTodoWithHATEOS,
    decorateTodosWithHATEOS,
}

