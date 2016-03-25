class Api::CarsController < ApplicationController

  # namespace the api and return the data in JSON
  def index
    @cars = Car.all
    render json: @cars
  end

end