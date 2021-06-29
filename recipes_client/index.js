const base_url = "http://127.0.0.1:3000"
const recipeService = new RecipeService(base_url)

recipeService.getRecipes()
