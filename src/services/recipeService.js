import Recipe from "../models/Recipe.js";

const getAll = () => {
    return Recipe.find();
}

const getOne = (id) => {
    return Recipe.findById(id);
}

const add = (data) => {
    return Recipe.create(data);
}

const edit = (id, data) => {
    return Recipe.findByIdAndUpdate(id, data);
}

export const recipeService = {
    getAll,
    getOne,
    add,
    edit
}