const express = require('express');
const router = express.Router();

module.exports = ({repository, decorators}) => {
    router.get('/', (req, res) => {
        const todos = repository.getTodos();
        res.json(decorators.decorateTodosWithHATEOS(todos))
    })

    return router;
}