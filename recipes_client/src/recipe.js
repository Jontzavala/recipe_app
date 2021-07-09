class Recipe {
    static all =[]
    static recipesContainer = document.getElementById('recipes-container')
    static recipeForm = document.getElementById('recipe-form-container')

    constructor({id, name, ingredients, instructions, category_id}){
        this.id = id
        this.name = name
        this.ingredients = ingredients
        this.instructions = instructions
        this.category_id = category_id

        this.element = document.createElement('div')
        this.element.dataset.id = this.id
        this.element.id = `recipe-${this.id}`
        this.element.addEventListener('click', this.deleteRecipe)
        


        Recipe.all.push(this)
    }

    recipeElement(){
        this.element.innerHTML += `
            <br>
            <div>
            <h3>${this.name}</h3>
                <ul>${this.ingredients}</ul>
                <br>
                <ul>${this.instructions}</ul>
            </div>
            <button id='delete-bttn'>Remove Recipe</button>

        `
        return this.element
    }

    renderToDom(){
        Recipe.recipesContainer.appendChild(this.recipeElement())
    }

    deleteRecipe = () => {
        if (event.target.innerHTML === 'Remove Recipe'){
            this.element.remove()
            recipeService.deleteRecipe(this.id)
        }
    }


    static renderRecipeForm(){
        recipeForm.innerHTML += `
        <h3>Create a New Recipe</h3>
        <form id="new-recipe-form">
            Name: <input type="text" id="name">
            <br>
            Choose a category: <select id="select-category">
                <option selected disabled hidden style='display: none' value=''></option>
            </select>
            <br>
            Ingredients: <input type="text" id="ingredients">
            <br>
            Instructions: <input type="text" id="instructions">
            <br>
            <input type="submit" id="create" value="Add a Recipe">
        <form>
        `
    }
}