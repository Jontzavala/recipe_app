class CreateRecipes < ActiveRecord::Migration[6.1]
  def change
    create_table :recipes do |t|
      t.string :name
      t.string :ingredients
      t.string :instructions
      t.integer :category_id

      t.timestamps
    end
  end
end
