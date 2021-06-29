/// resposible for fetch request to model

class RecipeService{

    constructor(endpoint){
        this.endpoint = endpoint
    }

    getRecipes(){
        fetch(`${this.endpoint}/recipes`)
        .then(resp => resp.json())
        .then(recipes => {
            debugger
        })
    }
}