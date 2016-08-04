class Movies4 < ActiveRecord::Migration
  drop_table :movies
  def change
    create_table :movies do |t|
      t.text :overview
      t.text :original_title
      t.text :runtime
      t.float :vote_average
      t.text :poster_path
      t.text :api_id
      t.text :release_date
    end
  end
end
