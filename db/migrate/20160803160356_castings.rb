class Castings < ActiveRecord::Migration
  drop_table :casting
  def change
    create_table :castings do |t|
      t.text :img
      t.text :name
      t.text :api_id
      t.text :api_related_id
      t.boolean :actor
    end
  end
end
