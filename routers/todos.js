const express = require("express");
const routerTodos = express.Router();
const controllerTodos = require("../controllers/todos");

routerTodos
  .route("/todos")
  .get(controllerTodos.getTodos)
  .post(controllerTodos.insert);

routerTodos
  .route("/todos/:id")
  .put(controllerTodos.update)
  .delete(controllerTodos.delete)
  .get(controllerTodos.getTodosById);

module.exports = routerTodos;
