class Actor < ActiveRecord::Base

 validates :api_id, :uniqueness => true

 has_many :castings, :primary_key => :api_id
 has_many :movies, :through => :castings
 has_many :actor_comments, :primary_key => :api_id, :foreign_key => :api_id

end
