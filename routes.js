import { Router } from "express";

import { homeController } from "./src/controllers/home-controller.js";
import { recipesController } from "./src/controllers/recipes-controller.js";

const router = Router();

router.use(homeController);
router.use('/recipes', recipesController);

export const routes = router;