import db from '../models';
import { AdminPagesInstance } from '../models/AdminPages';
import EntityNotFoundException from '../exceptions/EntityNotFoundException';
import UnauthorizedException from '../exceptions/UnauthorizedException';

class AdminPagesService {

    public findAll(): Promise<AdminPagesInstance[]> {
        return Promise.resolve(
            db.AdminPages.findAll()
        )
    }

    public insert(page): Promise<AdminPagesInstance> {
        return Promise.resolve(
            db.AdminPages.create(page)
        );
    };

    public update(id, pageData): Promise<AdminPagesInstance> {
        return new Promise((resolve, reject) => db.AdminPages
            .findById(id)
            .then(user => {
                if (!user) reject(new EntityNotFoundException());

                resolve(user.update(pageData));
            })
        )
    };

    public delete(id): Promise<number> {
        return Promise.resolve(
            db.AdminPages.destroy({ where: { id } })
        );
    };

}

export default new AdminPagesService();