Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api,defaults: {format: :json} do
    resources :actors, param: :api_id, only: [:show] do
      resources :actors_comments
    end
    resources :movies, param: :api_id, only: [:show] do
      resources :movies_comments
    end
    resources :actors, param: :api_id, only: [:show] do
      member do
        get :movies
      end
    end
    resources :movies, param: :api_id, only: [:show] do
      member do
        get :actors
      end
    end
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
  end

end
