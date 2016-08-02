class Actors < ActiveRecord::Migration
  def change
    create_table :actors do |t|
      t.text :adult
      t.text :biography
      t.text :birthday
      t.text :deathday
      t.text :gender
      t.text :homepage
      t.text :api_id
      t.text :imdb_id
      t.text :name
      t.text :place_of_birth
      t.text :popularity
      t.text :profile_path
    end
  end
end
