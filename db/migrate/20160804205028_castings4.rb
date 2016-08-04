class Castings4 < ActiveRecord::Migration
  def change

    drop_table :castings

    create_table :castings do |t|
      t.text :movie_id
      t.text :actor_id
      t.boolean :actor_casting
      t.boolean :movie_casting
    end

  end
end
