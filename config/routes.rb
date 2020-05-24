Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :interviews
  get   '/interviews', controller:'interviews', action:'index'
  post  '/interviews/new', controller:'interviews', action:'create'
  root "interviews#index"
end
