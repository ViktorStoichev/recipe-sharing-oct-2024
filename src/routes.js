import { Router } from "express";

import { homeController } from "./controllers/home-controller.js";
import { recipesController } from "./controllers/recipes-controller.js";
import { userController } from "./controllers/user-controller.js";

const router = Router();

router.use(homeController);
router.use('/recipes', recipesController);
router.use('/user', userController);

export const routes = router;