Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api,defaults: {format: :json} do
    resources :actors, param: :api_id
  end
end
