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
                r.slapOnDom()
            }
        })
    }

    createRecipe(){
        const recipe = {
            name: document.getElementById("name").value,
            ingredients: document.getElementById("ingredients").value,
            instructions: document.getElementById("instructions").value,
            category_id: 2
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
            r.slapOnDom()
        })
    }

    deleteRecipe(id){
        fetch(`${this.endpoint}/recipes/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(json => alert(json.message))
    }
}