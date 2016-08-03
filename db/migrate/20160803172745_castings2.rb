class Castings2 < ActiveRecord::Migration
  def change
    create_table :castings do |t|
      t.text :api_id
      t.text :api_related_id
      t.boolean :actor
    end

    create_table :movies do |t|
      t.text :overview
      t.text :original_title
      t.text :runtime
      t.float :vote_average
      t.text :poster_path
      t.boolean :actor
    end
  end

end
