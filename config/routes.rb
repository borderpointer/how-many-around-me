Rails.application.routes.draw do

  namespace :api do
    resources :cars, only: [:index], defaults: {format: :json}
  end

  root 'cars#index'

end
