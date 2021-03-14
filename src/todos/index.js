const todosRepository = require('./todosRepository')
const todosDecorators = require('./todosDecorators')
const todosController = require('./todosController')

module.exports = (database) => todosController({
    repository: todosRepository(database),
    decorators: todosDecorators
})