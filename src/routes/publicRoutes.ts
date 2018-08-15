import AuthenticationController from "../controllers/AuthenticationController";

const route = (publicRouter) => {
    publicRouter.post('/login', AuthenticationController.login);
}

export default route;