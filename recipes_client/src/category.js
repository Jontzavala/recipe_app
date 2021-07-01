class Category{
    static all =[]
    static categoriesContainer = document.getElementById('categories-container')
    static categoryForm = document.getElementById("form-container")

    constructor({id, name}){
        this.id = id
        this.name = name

        this.element = document.createElement('div')
        this.element.dataset.id = this.id
        this.element.id = `category-${this.id}`
        this.element.addEventListener('click', this.handleClickDelete)
        this.element.addEventListener('click', this.handleShowAllRecipes)


        Category.all.push(this)
    }

    categoryHTML(){
        this.element.innerHTML += `
        <div>
            <h3>${this.name}</h3>
        </div>
        <div id='recipes-container-${this.id}'>
        </div>
        <button id='delete-bttn'>Delete Category</button>
        <button id='recipes-bttn'>Show All Recipes</button>
        <br>
        <br>
        `
        return this.element
    }

    slapOnDom(){
        categoriesContainer.append(this.categoryHTML())
        this.element.addEventListener('click', this.handleClickRecipe)
    }

    static renderForm(){
        categoryForm.innerHTML += `
        <form id="new-category-form">
            <h3>Create a New Category!</h3>
            Name: <input type="text" id="name">
            <input type="submit" id="create">
        <form>
        `
        categoryForm.addEventListener('submit', this.handleSubmit)
    }

    static handleSubmit(){
        event.preventDefault()
        categoryService.createCategory()
        event.target.reset()
    }

    handleClickDelete = () => {
        if (event.target.innerText === 'Delete Category'){
            this.element.remove()
            categoryService.deleteCategory(this.id)
        }
    }

    handleShowAllRecipes = () => {
        if (event.target.innerText === 'Show All Recipes'){
            categoryService.showAllRecipes(this.id)
        }
    }

    handleClickRecipe = () => {
        const r = Recipe.renderRecipeForm()
        const post = document.getElementById(event.target.parentNode.parentNode.id)
        post.innerHTML += r
        document.getElementById("new-category-form").addEventListener('submit', this.handleRecipeSubmit)
    }

    handleRecipeSubmit(){
        event.preventDefault()
        recipeService.createRecipe(event.target.parentNode)
        event.target.parentElement.firstElementChild.firstElementChild.nextElementSibling.addEventListener('click', Recipe.renderRecipeForm)
        event.target.remove()
        
    }




}