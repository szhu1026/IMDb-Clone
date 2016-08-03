class Casting < ActiveRecord::Base
  validates_uniqueness_of :movie_id, :scope => :actor_id

  belongs_to :actor, :foreign_key => :actor_id, :primary_key => :api_id
  belongs_to :movie, :foreign_key => :movie_id, :primary_key => :api_id

end
