import AdminUserController from "../controllers/AdminUserController";

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
    });    


}

export default route;