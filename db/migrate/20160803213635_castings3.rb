class Castings3 < ActiveRecord::Migration
  def change

    drop_table :castings

    create_table :castings do |t|
      t.text :movie_id
      t.text :actor_id
    end

  end
end
