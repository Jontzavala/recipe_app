class Recipe {
    static all =[]
    static recipesContainer = document.getElementById("recipes-container")

    constructor({id, name, ingredients, instructions, category_id}){
        this.id = id
        this.name = name
        this.ingredients = ingredients
        this.instructions = instructions
        this.category_id = category_id

        this.element = document.createElement('li')
        this.element.dataset.id = this.id
        this.element.id = `recipe-${this.id}`


        Recipe.all.push(this)
    }

    recipeHTML(){
        this.element.innerHTML += `
            <div>
                <h3>${this.name}</h3>
                <p>${this.ingredients} - ${this.instructions}</p>
            </div>
        `
        return this.element
    }

    slapOnDom(){
        Recipe.recipesContainer.appendChild(this.recipeHTML())
    }
}