Rails.application.routes.draw do
  resources :companies
  resources :founders
  root to: 'companies#index'
end
