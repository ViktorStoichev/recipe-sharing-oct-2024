import Recipe from "../models/Recipe.js";

const getAll = () => {
    return Recipe.find();
}

const getOne = (id) => {
    return Recipe.findById(id);
}

export const recipeService = {
    getAll,
    getOne,
}