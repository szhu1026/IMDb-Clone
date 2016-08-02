Rails.application.routes.draw do
  resources :actors, param: :api_id
end
