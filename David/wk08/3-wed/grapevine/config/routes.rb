Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :articles


  get 'api/comments',       to: 'api/comments_controller#index'

  get '/api/articles/:id',  to: 'api/articles#show'

  get '/api/stuff',         to: 'articles#stuff'



end
