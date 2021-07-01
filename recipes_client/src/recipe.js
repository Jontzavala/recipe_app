class Recipe {
    static all =[]
    static recipesContainer = document.getElementById("recipes-container")
    static recipeForm = document.getElementById("form-container")

    constructor({id, name, ingredients, instructions, category_id}){
        this.id = id
        this.name = name
        this.ingredients = ingredients
        this.instructions = instructions
        this.category_id = category_id

        this.element = document.createElement('span')
        this.element.dataset.id = this.id
        this.element.id = `recipe-${this.id}`
        


        //Recipe.all.push(this)
    }

    static recipeHTML(recipe){

        let category = recipe.category_id
        const toPost = document.getElementById(`recipes-container-${category}`)
        toPost.innerHTML = ""
        toPost.innerHTML += `
            <h4>${recipe.name}</h4>
            <br>
            <li>${recipe.ingredients}</li>
            <br>
            <ui>${recipe.instructions}</ui>
            <br>
            <br>
        `
    }


    static renderRecipeForm(){
        event.target.addEventListener('click', this.handleClickRecipe)
        return `
        <form id="new-recipe-form">
            <h3>Create a New Recipe</h3>
            Name: <input type="text" id="name">
            <br>
            Ingredients: <input type="text" id="ingredients">
            <br>
            Instructions: <input type="text" id="instructions">
            <br>
            <input type="submit" id="create">
        <form>
        `
    }

    appendRecipetoDom(){
        const recipesContainer = document.getElementById(`recipes-container-${this.category_id}`)
        recipesContainer.innerHTML += `
        <div data-id="${this.id}", id="recipe-${this.id}">
            ${this.name}
            <br>
            ${this.ingredients}
            <br>
            ${this.instructions}
            <br>
            <br>
            <button class='deleteBttn' id='delete-recipe-bttn-${this.id}'>Delete Recipe</button>
            <br>
            <br>
        </div>
        `
        const deleteButtons = document.querySelectorAll('.deleteBttn')
        for (const deleteButton of deleteButtons) {
            deleteButton.addEventListener('click', this.handleClickDeleteRecipe)
        }
    }


    handleClickDeleteRecipe = (event) => {
        let categoryID = parseInt(event.target.parentNode.parentNode.parentNode.dataset.id)
        if (event.target.innerText === 'Delete Recipe'){
            event.target.parentNode.remove()
            recipeService.deleteRecipe(categoryID, this.id)
        }
    }
}