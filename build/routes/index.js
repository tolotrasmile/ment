"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var todos_route_1 = require("./todos.route");
var router = express_1.Router();
router.get('/', function (req, res) { return res.json({ message: 'Connected to server' }); });
router.use(todos_route_1.todoRoutes);
exports.route = router;
//# sourceMappingURL=index.js.map