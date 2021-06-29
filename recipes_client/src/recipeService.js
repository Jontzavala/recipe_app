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
}