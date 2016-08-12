class Comments6 < ActiveRecord::Migration
  def change
    drop_table :movie_comments
    drop_table :actor_comments

    create_table :movie_comments do |t|
      t.text :title
      t.text :body
      t.text :api_id
      t.text :username
      t.integer :user_id
      t.timestamps
    end

    create_table :actor_comments do |t|
      t.text :title
      t.text :body
      t.text :api_id
      t.text :username
      t.integer :user_id
      t.timestamps
    end
    
  end
end
