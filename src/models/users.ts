import * as Sequelize from 'sequelize';
import { genSaltSync, hashSync, compareSync } from 'bcryptjs';
import { ModelsInterface } from '../interfaces/ModelsInterface';
import { BaseModelInterface } from '../interfaces/BaseModelInterface';

export interface AdminUserAttributes {
    id?: string;
    name?: string;
    email?: string;
    password?: string;
    createdAt?: string;
    updatedAt?: string;
}

export interface AdminUserInstance extends Sequelize.Instance<AdminUserAttributes>, AdminUserAttributes {
    isPassword(encodedPassword: string, password: string): boolean;
}

export interface AdminUserModel extends Sequelize.Model<AdminUserInstance, AdminUserAttributes>, BaseModelInterface {}

export default (sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes): AdminUserModel => {

    const AdminUser: AdminUserModel = 
        sequelize.define('users', {
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
                beforeCreate: (user: AdminUserInstance, options: Sequelize.CreateOptions): void => {
                    // const salt = genSaltSync();
                    // user.password = hashSync(user.password, salt);
                },
                beforeUpdate: (user: AdminUserInstance, options: Sequelize.CreateOptions): void => {
                    // if (user.changed('password')) {
                    //     const salt = genSaltSync();
                    //     user.password = hashSync(user.password, salt);
                    // }
                }
            }
        });

        AdminUser.prototype.isPassword = (encodedPassword: string, password: string): boolean => {
            return compareSync(password, encodedPassword);
        }
        
    return AdminUser;

};