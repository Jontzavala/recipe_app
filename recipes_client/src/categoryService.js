// resposible for fetch request to model
class CategoryService{
    constructor(endpoint){
       this.endpoint = endpoint 
    }

    getCategories(){
        fetch(`${this.endpoint}/categories`)
        .then(resp => resp.json())
        .then(categories => {
            for (const category of categories){
                const c = new Category(category)
                c.slapOnDom()
            }
        })
    }

    createCategory(){
        const category = {
            name: document.getElementById("name").value
        }

        const configObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(category)
        }

        fetch(`${this.endpoint}/categories`, configObj)
        .then(resp => resp.json())
        .then(category => {
            const c = new Category(category)
            c.slapOnDom()
        })
    }

    showAllRecipes(){
        const category = event.target.parentNode
        const post = document.getElementById(`recipes-container-${category.dataset.id}`)
        fetch(`${this.endpoint}/categories/${category.dataset.id}/recipes`)
        .then(resp => resp.json())
        .then(recipes => {
            post.innerHTML = ""
            for (const recipe of recipes) {
                const r = new Recipe(recipe)
                r.appendRecipetoDom()
            }
        })
    }

    deleteCategory(id){
        fetch(`${this.endpoint}/categories/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(json => alert(json.message))
    }

}