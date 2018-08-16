import db from '../models';
import { AdminPropertiesInstance } from '../models/AdminProperties';
import EntityNotFoundException from '../exceptions/EntityNotFoundException';
import UnauthorizedException from '../exceptions/UnauthorizedException';

class AdminPropertiesService {

    public findAll(): Promise<AdminPropertiesInstance[]> {
        return Promise.resolve(
            db.AdminProperties.findAll()
        )
    }

    public insert(page): Promise<AdminPropertiesInstance> {
        return Promise.resolve(
            db.AdminProperties.create(page)
        );
    };

    public update(id, pageData): Promise<AdminPropertiesInstance> {
        return new Promise((resolve, reject) => db.AdminProperties
            .findById(id)
            .then(user => {
                if (!user) reject(new EntityNotFoundException());

                resolve(user.update(pageData));
            })
        )
    };

    public delete(id): Promise<number> {
        return Promise.resolve(
            db.AdminProperties.destroy({ where: { id } })
        );
    };

}

export default new AdminPropertiesService();