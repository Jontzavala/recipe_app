const base_url = "http://127.0.0.1:3000"
const recipeService = new RecipeService(base_url)
Recipe.recipeForm.addEventListener("submit", handlesubmit)

recipeService.getRecipes()
Recipe.renderForm()

function handlesubmit(){
    event.preventDefault()
    recipeService.createRecipe()
    event.target.reset()
}
