import { Router } from "express";
import { recipeService } from "../services/recipeService.js";

const router = Router();

router.get('/add-recipe', (req, res) => {
    res.render('addRecipe');
});

router.post('/add-recipe', async (req, res) => {
    const receivedData = req.body;

    await recipeService.add(receivedData);

    res.redirect('/');
})

router.get('/:recipeId/details', async (req, res) => {
    const id = req.params.recipeId;
    
    const recipe = await recipeService.getOne(id).lean();
    
    res.render('details', { recipe });
});

router.get('/:recipeId/edit', async (req, res) => {
    const id = req.params.recipeId;

    const recipe = await recipeService.getOne(id).lean();

    res.render('edit', { recipe });
});

router.post('/:recipeId/edit', async (req, res) => {
    const id = req.params.recipeId;
    const receivedData = req.body;

    await recipeService.edit(id, receivedData);
    
    res.redirect('/');
});

router.get('/search', async (req, res) => {
    const filter = req.query;
    const recipes = await recipeService.getAll(filter).lean();
    res.render('home', { isSearch: true, recipes, filter });
})

export const recipesController = router;