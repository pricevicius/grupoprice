import * as Sequelize from 'sequelize';
import { genSaltSync, hashSync, compareSync } from 'bcryptjs';
import { ModelsInterface } from '../interfaces/ModelsInterface';
import { BaseModelInterface } from '../interfaces/BaseModelInterface';

export interface AdminPropertiesAttributes {
    id?: string;
    title?: string;
    subtitle?: string;
    content?: string;
    image?: string;
    createdAt?: string;
    updatedAt?: string;
}

export interface AdminPropertiesInstance extends Sequelize.Instance<AdminPropertiesAttributes>, AdminPropertiesAttributes {
    isPassword(encodedPassword: string, password: string): boolean;
}

export interface AdminPropertiesModel extends Sequelize.Model<AdminPropertiesInstance, AdminPropertiesAttributes>, BaseModelInterface {}

export default (sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes): AdminPropertiesModel => {

    const AdminProperties: AdminPropertiesModel = 
        sequelize.define('AdminProperties', {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                allowNull: false,
                primaryKey: true
            },
            propertie_code: {
              type: DataTypes.STRING(50),
              allowNull: false
            },
            title: {
              type: DataTypes.STRING(250),
              allowNull: false
            },
            slug: {
              type: DataTypes.STRING(250),
              allowNull: false
            },
            content: {
              type: DataTypes.TEXT(),
              allowNull: false
            },
            image: {
              type: DataTypes.STRING(250),
              allowNull: true
            },
            images_gallery: {
              type: DataTypes.TEXT(),
              allowNull: true
            },
            info_propertie: {
              type: DataTypes.STRING(250),
              allowNull: false
            },
            status: {
              type: DataTypes.ENUM('0','1'),
              allowNull: false
            },
        }, { 
            tableName: 'properties'
        });

        AdminProperties.prototype.isPassword = (encodedPassword: string, password: string): boolean => {
            return compareSync(password, encodedPassword);
        }
        
    return AdminProperties;

};