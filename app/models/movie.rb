class Movie < ActiveRecord::Base
  validates :api_id, :uniqueness => true

  has_many :castings, :primary_key => :api_id
  has_many :actors, :through => :castings
end
