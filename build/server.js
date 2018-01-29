"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var logger = require("morgan");
var helmet = require("helmet");
var compression = require("compression");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var mongoose = require("mongoose");
var routes_1 = require("./routes");
var Server = /** @class */ (function () {
    function Server() {
        this.express = express();
        this.setupExpress();
    }
    /**
     * Setup Express server
     */
    Server.prototype.setupExpress = function () {
        this.middleware();
        this.connectMongoose();
        this.routes();
    };
    /**
     * Setup Express server
     */
    Server.prototype.connectMongoose = function () {
        var MONGO_URI = 'mongodb://localhost/ment';
        mongoose.connect(MONGO_URI);
        mongoose.connection.on('connected', function () {
            console.log("Connected to database " + MONGO_URI);
        });
        mongoose.connection.on('error', function (e) {
            console.log("Error connecting to database " + MONGO_URI);
            console.log(e);
        });
    };
    /**
     * Setup Express middlewares
     */
    Server.prototype.middleware = function () {
        // express middleware
        this.express.use(bodyParser.urlencoded({ extended: true }));
        this.express.use(bodyParser.json());
        this.express.use(cookieParser());
        this.express.use(logger('dev'));
        this.express.use(compression());
        this.express.use(helmet());
    };
    Server.prototype.routes = function () {
        this.express.use(routes_1.route);
    };
    Server.prototype.start = function (port, callback) {
        this.express.listen(port, callback);
    };
    return Server;
}());
exports.server = new Server();
//# sourceMappingURL=server.js.map