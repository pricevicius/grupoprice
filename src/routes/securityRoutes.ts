import AdminUserController from "../controllers/AdminUserController";
import AdminPagesController from "../controllers/AdminPagesController";

const route = (securityRouter) => {
    
    /**
     * Rotas de users
     */
    securityRouter.group("/admin/", function(router) {

        router.get("/users/", AdminUserController.findAll);
        router.post("/users/", AdminUserController.insert);
        router.group("/users/", function(router) {
            router.put(':id', AdminUserController.update)
            router.delete(':id', AdminUserController.delete);
        });

        router.get("/pages/", AdminPagesController.findAll);
        router.post("/pages/", AdminPagesController.insert);
        router.group("/pages/", function(router) {
            router.put(':id', AdminPagesController.update)
            router.delete(':id', AdminPagesController.delete);
        });
    });    


}

export default route;