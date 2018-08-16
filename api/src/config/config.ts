import * as path from 'path';
import * as Sequelize from 'sequelize';

const env: string = process.env.NODE_ENV || 'development';
const config = require(path.resolve(`${__dirname}./../config/config.json`))[env];
const operatorsAliases = { $in: Sequelize.Op.in };

export default Object.assign({operatorsAliases}, config);


