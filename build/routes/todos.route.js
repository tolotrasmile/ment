"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var todo_resource_1 = require("../resources/todo.resource");
var router = express.Router();
router.route('/todos')
    .get(todo_resource_1.default.findAll)
    .post(todo_resource_1.default.create)
    .put(todo_resource_1.default.update);
router.route('/todos/:id')
    .get(todo_resource_1.default.findById);
exports.todoRoutes = router;
//# sourceMappingURL=todos.route.js.map