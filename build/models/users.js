"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bcryptjs_1 = require("bcryptjs");
exports.default = (sequelize, DataTypes) => {
    const AdminUser = sequelize.define('users', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(200),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(250),
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING(128),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
    }, {
        tableName: 'users',
        hooks: {
            beforeCreate: (user, options) => {
                // const salt = genSaltSync();
                // user.password = hashSync(user.password, salt);
            },
            beforeUpdate: (user, options) => {
                // if (user.changed('password')) {
                //     const salt = genSaltSync();
                //     user.password = hashSync(user.password, salt);
                // }
            }
        }
    });
    AdminUser.prototype.isPassword = (encodedPassword, password) => {
        return bcryptjs_1.compareSync(password, encodedPassword);
    };
    return AdminUser;
};
