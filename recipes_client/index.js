const base_url = "http://127.0.0.1:3000"
const recipeService = new RecipeService(base_url)
const categoryService = new CategoryService(base_url)
Category.categoryForm.addEventListener("submit", handlesubmit)
Recipe.recipeForm.addEventListener("submit", handlesubmit)

categoryService.getCategories()
Category.renderForm()
recipeService.getRecipes()
Recipe.renderForm()

function handlesubmit(){
    event.preventDefault()
    recipeService.createRecipe()
    event.target.reset()
}

function handlesubmit(){
    event.preventDefault()
    categoryService.createCategory()
    event.target.reset()
}