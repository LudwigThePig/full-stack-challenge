Rails.application.routes.draw do
  resources :companies
  resources :founders
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'companies#index'
  # post '/companies/create', to: 'companies#create'
  # post '/api/v1/companies', to: 'companies#create'
end
