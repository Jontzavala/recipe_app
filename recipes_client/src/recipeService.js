class RecipeService{
    constructor(endpoint){
        this.endpoint = endpoint
    }

    getRecipies(){
        fetch(`${this.enpoint}/recipes`)
        .then(resp => resp.json())
        .then(recipes => {
            for (const recipe of recipes){
                const r = new Recipe(recipe)
                r.renderToDom()
            }
        })
    }


    createRecipe(){
        const recipe = {
            name: document.getElementById("name").value,
            ingredients: document.getElementById("ingredients").value,
            instructions: document.getElementById("instructions").value,
            category_id: document.getElementById('select-category').value
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
            r.renderToDom()
        })
    }

    deleteRecipe(id){
        fetch(`${this.endpoint}/recipes/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(json => alert(json.message))
    }

}