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

module.exports = (database) => {
    todosRepository.database = database;
    return todosRepository;
}