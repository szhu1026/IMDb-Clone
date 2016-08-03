Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api,defaults: {format: :json} do
    resources :actors, param: :api_id, only: [:show] do
    end
  end

  namespace :api,defaults: {format: :json} do
    resources :movies, param: :api_id, only: [:show]
  end

  namespace :api,defaults: {format: :json} do
    resources :actors, param: :api_id, only: [:show] do
      member do
        get :movies
      end
    end
  end

end
