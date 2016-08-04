class Castings5 < ActiveRecord::Migration
  def change

    drop_table :castings

    create_table :castings do |t|
      t.text :movie_id
      t.text :actor_id
      t.boolean :actor_casting, default: false
      t.boolean :movie_casting, default: false
    end

  end
end
