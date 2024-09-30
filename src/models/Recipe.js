import { Schema, model } from "mongoose";

const recipeSchema = new Schema({
    imageUrl: String,
    title: String,
    ingredients: String,
    instructions: String
});

const Recipe = model('Recipe', recipeSchema);

export default Recipe;