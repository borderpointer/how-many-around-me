class Api::CarsController < ApplicationController

  def index
    @cars = Car.all
    render json: @cars
  end

end