class Comments2 < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.text :title
      t.text :body
      t.text :api_id
      t.text :user_id
    end
  end
end
