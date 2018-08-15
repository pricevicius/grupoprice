import db from '../models';
import { AdminUserInstance } from '../models/AdminUser';
import EntityNotFoundException from '../exceptions/EntityNotFoundException';
import UnauthorizedException from '../exceptions/UnauthorizedException';

class AdminUserService {

    public findByEmail(email): Promise<AdminUserInstance> {
        return Promise.resolve(
            db.AdminUser.find( { where: { email } } )
        )
    }

    public findAll(): Promise<AdminUserInstance[]> {
        return Promise.resolve(
            db.AdminUser.findAll()
        )
    }

    public insert(user): Promise<AdminUserInstance> {
        return Promise.resolve(
            db.AdminUser.create(user)
        );
    };

    public update(id, userData): Promise<AdminUserInstance> {
        return new Promise((resolve, reject) => db.AdminUser
            .findById(id)
            .then(user => {
                if (!user) reject(new EntityNotFoundException());

                resolve(user.update(userData));
            })
        )
    };

    public delete(id): Promise<number> {
        return Promise.resolve(
            db.AdminUser.destroy({ where: { id } })
        );
    };

    public isAuthenticated(email, password): Promise<AdminUserInstance> {
        return new Promise((resolve, reject) => 
            this.findByEmail(email)
                .then(user => {
                    if (!user) reject(new EntityNotFoundException());
                    if (!user.isPassword(user.password, password)) reject(new UnauthorizedException());

                    resolve(user);
                })
        );
    }
}

export default new AdminUserService();