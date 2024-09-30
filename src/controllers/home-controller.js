import { Router } from "express";
import { recipeService } from "../services/recipeService.js";

const router = Router();

router.get('/', async (req, res) => {
    const recipes = await recipeService.getAll().lean();
    console.log(recipes);
    
    res.render('home', { recipes });
});

export const homeController = router;
