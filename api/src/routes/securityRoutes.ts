import AdminUserController from "../controllers/AdminUserController";
import AdminPagesController from "../controllers/AdminPagesController";
import AdminPropertiesController from "../controllers/AdminPropertiesController";

const route = (securityRouter) => {
    
    /**
     * Rotas de users
     */
    securityRouter.group("/admin/", function(router) {

        router.group("/users", function(router) {
            router.get("/", AdminUserController.findAll);
            router.post("/", AdminUserController.insert);
            router.put('/:id', AdminUserController.update)
            router.delete('/:id', AdminUserController.delete);
        });

        router.group("/pages", function(router) {
            router.get("/", AdminPagesController.findAll);
            router.post("/", AdminPagesController.insert);
            router.put('/:id', AdminPagesController.update)
            router.delete('/:id', AdminPagesController.delete);
        });

        router.group("/properties", function(router) {
            router.get("/", AdminPropertiesController.findAll);
            router.post("/", AdminPropertiesController.insert);
            router.put('/:id', AdminPropertiesController.update)
            router.delete('/:id', AdminPropertiesController.delete);
        });
    });    


}

export default route;