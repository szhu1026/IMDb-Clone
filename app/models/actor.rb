class Actor < ActiveRecord::Base

 validates :api_id, :uniqueness => true

 # def self.save_data_from_api
 #   response = HTTParty.get('https://api.themoviedb.org/3/person/287?api_key=50a303126fa608b8780f3e3caaf4695a')
 #   actor_data = JSON.parse(response)
 #  #  actors = actor_data.select{|elem| elem != id}.map do |line|
 #  #    u = User.new
 #  #    u.external_id = line['user']['id']
 #  #    # set name value however you want to do that
 #  #    u.save
 #  #    u
 #  #  end
 #   users.select(&:persisted?)
 # end

 

end
