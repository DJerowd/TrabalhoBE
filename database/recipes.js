const prisma = require("./prisma");


const getAllRecipes = (moreThan) => {
    return prisma.recipes.findMany({
        where: {
            price: {
                gt: moreThan
            }
        }
    })
}

const getRecipeById = (id) => {
    return prisma.recipes.findFirst({
        where: {
            id: id
        }
    })
}

const saveRecipe = (recipe) => {
    return prisma.recipes.create({
        data: recipe
    })
}

const updateRecipe = (id, recipe) => {
    return prisma.recipes.update({
        where: {
            id: id
        },
        data: recipe
    })
}

const deleteRecipe = (id) => {
    return prisma.recipes.delete({
        where: {
            id: id
        }
    })
}

module.exports = {
    saveRecipe,
    getAllRecipes,
    getRecipeById,
    updateRecipe,
    deleteRecipe
}