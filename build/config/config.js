"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || 'development';
const config = require(path.resolve(`${__dirname}./../config/config.json`))[env];
const operatorsAliases = { $in: Sequelize.Op.in };
exports.default = Object.assign({ operatorsAliases }, config);
