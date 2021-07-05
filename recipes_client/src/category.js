class Category{
    static all =[]
    static categoryContainer = document.getElementById('category-container')
    static categoryForm = document.getElementById('category-form-container')

    constructor({id, name}){
        this.id = id
        this.name = name

        this.element = document.createElement('div')
        this.element.id = `category-${this.id}`


        Category.all.push(this)
    }

    categoryElement(){
        this.element.innerHTML += `
        <p><strong>${this.name}</strong>
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


}