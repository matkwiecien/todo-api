const todosRepository = {
    database: null,
    addTodo(description) {
        const todo = {
            id: this.database.todos.length + 1,
            description
        }
        this.database.todos.push(todo)
        return todo;
    },

    getTodos() {
        return [...this.database.todos]
    }
}

module.exports = (database) => {
    todosRepository.database = database;
    return todosRepository;
}