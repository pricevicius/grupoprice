import * as Sequelize from 'sequelize';
import { genSaltSync, hashSync, compareSync } from 'bcryptjs';
import { ModelsInterface } from '../interfaces/ModelsInterface';
import { BaseModelInterface } from '../interfaces/BaseModelInterface';

export interface AdminPagesAttributes {
    id?: string;
    title?: string;
    subtitle?: string;
    content?: string;
    image?: string;
    createdAt?: string;
    updatedAt?: string;
}

export interface AdminPagesInstance extends Sequelize.Instance<AdminPagesAttributes>, AdminPagesAttributes {
    isPassword(encodedPassword: string, password: string): boolean;
}

export interface AdminPagesModel extends Sequelize.Model<AdminPagesInstance, AdminPagesAttributes>, BaseModelInterface {}

export default (sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes): AdminPagesModel => {

    const AdminPages: AdminPagesModel = 
        sequelize.define('AdminPages', {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                allowNull: false,
                primaryKey: true
            },
            title: {
              type: DataTypes.STRING(250),
              allowNull: false
            },
            subtitle: {
              type: DataTypes.STRING(250),
              allowNull: false
            },
            content: {
              type: DataTypes.TEXT(),
              allowNull: false
            },
            image: {
              type: DataTypes.STRING(),
              allowNull: false
            },
        }, { 
            tableName: 'pages'
        });

        AdminPages.prototype.isPassword = (encodedPassword: string, password: string): boolean => {
            return compareSync(password, encodedPassword);
        }
        
    return AdminPages;

};