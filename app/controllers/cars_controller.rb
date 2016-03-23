class CarsController < ApplicationController

  before_action :api_call, only: [:index]

  def index
    @cars = Car.all
  end

  def api_call
    latitude = "40.802439"
    longitude = "-73.961600"

    loop do
      response = HTTParty.get("https://api.uber.com/v1/products?latitude=#{latitude}&longitude=#{longitude}", headers: {"Authorization" => "Token #{Rails.application.secrets.uber_server_token}"})

      @quantity = response["products"].count
      @car = Car.create(:quantity => @quantity)

      sleep(10) #sleep for 5 mins
    end
  end

  # private

  # def car_params

  #   params.require(:car).permit(:quantity)

  # end

end

