# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
breakfast = Category.create(name: 'breakfast')

Recipe.create([
    {name: "Eggs and Bacon", ingredients: "Eggs, Bacon, Salt, Pepper, Milk, Butter", instructions: "instrictions", category_id: 1},
    {name: "name", ingredients: "ingredients", instructions: "instrictions", category_id: 3},
    {name: "name2", ingredients: "ingredients2", instructions: "instrictions2", category_id: 4}
])