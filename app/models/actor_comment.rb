class ActorComment < ActiveRecord::Base
  belongs_to :user, :foreign_key => :user_id, :primary_key => :id
  belongs_to :actor, :foreign_key => :api_id, :primary_key => :api_id
end
