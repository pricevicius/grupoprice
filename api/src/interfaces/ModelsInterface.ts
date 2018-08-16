import { AdminUserModel } from "../models/AdminUser";
import { AdminPagesModel } from "../models/AdminPages";
import { AdminPropertiesModel } from "../models/AdminProperties";

export interface ModelsInterface {
    AdminUser: AdminUserModel;
    AdminPages: AdminPagesModel;
    AdminProperties: AdminPropertiesModel;
}