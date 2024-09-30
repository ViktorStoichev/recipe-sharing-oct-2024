import { Router } from "express";
import { recipeService } from "../services/recipeService.js";

const router = Router();

router.get('/add-recipe', (req, res) => {
    res.render('addRecipe');
});

router.get('/:recipeId', async (req, res) => {
    const id = req.params.recipeId;
    
    const recipe = await recipeService.getOne(id).lean();
    
    res.render('details', { recipe });
})

export const recipesController = router;