Rails.application.routes.draw do
  # resources :users, only:[:create, :show]

  post '/signup', to: "users#create"
  post '/login', to: "sessions#create"
  get '/me', to: "users#show"

  

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
