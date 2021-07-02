const categoriesContainer = document.getElementById('categories-container')
const categoryForm = document.getElementById("form-container")
const recipeForm = document.getElementById("form-container")
const base_url = "http://127.0.0.1:3000"
const recipeService = new RecipeService(base_url)
const categoryService = new CategoryService(base_url)

categoryService.getCategories()
Category.renderForm()
