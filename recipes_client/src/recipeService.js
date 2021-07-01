class RecipeService{
    constructor(endpoint){
        this.endpoint = endpoint
    }

    getRecipes(){
        fetch(`${this.endpoint}/recipes`)
        .then(resp => resp.json())
        .then(recipes => {
            for (const recipe of recipes){
                const r = new Recipe(recipe)
                r.appendRecipetoDom()
            }
        })
    }

    createRecipe(element){
        const recipe = {
            name: document.getElementById("name").value,
            ingredients: document.getElementById("ingredients").value,
            instructions: document.getElementById("instructions").value,
            category_id: parseInt(element.dataset.id)
        }

        const configObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(recipe)
        }

        fetch(`${this.endpoint}/recipes`, configObj)
        .then(resp => resp.json())
        .then(recipe => {
            const r = new Recipe(recipe)
            r.appendRecipetoDom
        })
    }

    deleteRecipe(category, id){
        fetch(`${this.endpoint}/categories/${category}/recipes/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(json => alert(json.message))
    }
}