class Category{
    static all =[]
    static categoryContainer = document.getElementById('category-container')
    static categoryForm = document.getElementById('category-form-container')

    constructor({id, name}){
        this.id = id
        this.name = name

        this.element = document.createElement('div')
        this.element.dataset.id = this.id
        this.element.id = `category-${this.id}`
        this.element.addEventListener('click', this.deleteCategory)


        Category.all.push(this)
    }

    categoryElement(){
        this.element.innerHTML += `
        <p><strong>${this.name}</strong>
        <br>
        <button id='delete-bttn'>Remove Category</button>
        <br>
        `
        return this.element
    }

    slapOnDom(){
        Category.categoryContainer.appendChild(this.categoryElement())
    }

    optionToSelect(){
        const selectCategory = document.getElementById('select-category')
        selectCategory.options.add(new Option(this.name, this.id))
    }

    static renderForm(){
        Category.categoryForm.innerHTML += `
        <h3>Create a New Category!</h3>
        <form id="new-category-form">
            Name: <input type="text" id="name">
            <input type="submit" id="create">
        <form>
        `
    }

    deleteCategory = () =>{
        if (event.target.innerText === 'Remove Category'){
            this.element.remove()
            categoryService.deleteCategory(this.id)
        }
    }


}