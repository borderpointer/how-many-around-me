class Car < ActiveRecord::Base

  def self.api_call
    latitude = "40.802439"
    longitude = "-73.961600"

    response = HTTParty.get("https://api.uber.com/v1/products?latitude=#{latitude}&longitude=#{longitude}", headers: {"Authorization" => "Token #{Rails.application.secrets.uber_server_token}"})
    @cars = response
    return @cars.count
  end

end