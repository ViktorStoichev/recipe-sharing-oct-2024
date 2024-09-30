import Recipe from "../models/Recipe.js";

const getAll = () => {
    const recipes = Recipe.find();
    return recipes;
}

export const recipeService = {
    getAll,
}