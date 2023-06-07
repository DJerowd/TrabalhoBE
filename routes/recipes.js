const express = require("express");
const { saveRecipe, getAllRecipes, getRecipeById, updateRecipe, deleteRecipe } = require("../database/recipes");
const router = express.Router();

/*id    Int     @id @default(autoincrement())
  name  String
  description String
  prepTime Decimal*/

router.get("/recipes", async (req, res) => {
    const moreThan = req.query.more_than ? Number(req.query.more_than) : 0;
    const recipes = await getAllRecipes(moreThan);
    res.json({
        recipes
    })
})

router.get("/recipes/:id", async (req, res) => {
    const id = Number(req.params.id);
    const recipe = await getRecipeById(id)
    res.json({
        recipe
    })
})

router.post("/recipes", async (req, res) => {
    const newRecipe = {
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        prepTime: req.body.prepTime
    }
    const savedRecipe = await saveRecipe(newRecipe)
    res.json({
        product: savedRecipe
    })
})

router.put("/recipes/:id", async (req, res) => {
    const id = Number(req.params.id);
    const recipe = {
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        prepTime: req.body.prepTime
    }
    const updatedRecipe = await updateRecipe(id, Recipe);
    res.json({
        product: updatedRecipe
    })
})

router.delete("/recipes/:id", async (req, res) => {
    const id = Number(req.params.id);
    await deleteRecipe(id);
    res.status(204).send();
})

module.exports = {
    router
}