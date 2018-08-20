Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  #bands 

  get '/bands', to: 'bands#index'
  get '/bands/:id', to: 'bands#show'
  post '/bands', to: 'bands#create'
  delete 'bands/:id', to: 'bands#delete'
  put '/books/:id', to: 'bands#update'


end
