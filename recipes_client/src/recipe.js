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

        this.element = document.createElement('li')
        this.element.dataset.id = this.id
        this.element.id = `recipe-${this.id}`
        this.element.addEventListener('click', this.handleClick)


        Recipe.all.push(this)
    }

    recipeHTML(){
        this.element.innerHTML += `
            <div>
                <h3>${this.name}</h3>
                <p>${this.ingredients} - ${this.instructions}</p>
            </div>
            <button id='delete-bttn'>Delete</button>
        `
        return this.element
    }

    slapOnDom(){
        Recipe.recipesContainer.appendChild(this.recipeHTML())
    }

    static renderForm(){
        Recipe.recipeForm.innerHTML += `
        <form id="new-recipe-form">
            Name: <input type="text" id="name">
            Ingredients: <input type="text" id="ingredients">
            Instructions: <input type="text" id="instructions">
            <input type="submit" id="create">
        <form>
        `
    }

    handleClick = () => {
        if (event.target.innerText === 'Delete'){
            this.element.remove()
            recipeService.deleteRecipe(this.id)
        }
    }
}