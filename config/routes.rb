Rails.application.routes.draw do
  root to: "static_pages#root"
  resources :actors, param: :api_id
end
