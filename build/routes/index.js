"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = express_1.Router();
router.get('/', function (req, res) { return res.json({ message: 'Connected to server' }); });
exports.route = router;
//# sourceMappingURL=index.js.map