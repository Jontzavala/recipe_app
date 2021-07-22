// const categoriesContainer = document.getElementById('categories-container')
// const recipesContainer = document.getElementById('recipes-container')
// const categoryForm = document.getElementById("form-container")
// const recipeForm = document.getElementById("form-container")
const base_url = "http://127.0.0.1:3000"
const recipeService = new RecipeService(base_url)
const categoryService = new CategoryService(base_url)
const removeCategory = document.getElementById('delete-bttn')
const recipeForm = document.getElementById('recipe-form-container')
const recipesContainer = document.getElementById('recipes-container')

Category.categoryForm.addEventListener('submit', handleCategorySubmit)


categoryService.getCategories()
recipeService.getRecipies()

Category.renderForm()
Recipe.renderRecipeForm()
Recipe.recipeForm.addEventListener('submit', handleRecipeSubmit)


function handleCategorySubmit(){
    event.preventDefault()
    categoryService.createCategory()
    event.target.reset()
}

function handleRecipeSubmit(){
    event.preventDefault()
    recipeService.createRecipe()
    event.target.reset()
}