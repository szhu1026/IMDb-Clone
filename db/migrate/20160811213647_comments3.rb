class Comments3 < ActiveRecord::Migration
  def change
    drop_table :comments
    create_table :movie_comments do |t|
      t.text :title
      t.text :body
      t.text :api_id
      t.text :user_id
    end

    create_table :actor_comments do |t|
      t.text :title
      t.text :body
      t.text :api_id
      t.text :user_id
    end
  end
end
