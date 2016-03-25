class Car < ActiveRecord::Base

  # method that makes the get call to uber's api and returns the number of items in the response array
  def self.api_call
    latitude = "40.802439"
    longitude = "-73.961600"

    response = HTTParty.get("https://api.uber.com/v1/products?latitude=#{latitude}&longitude=#{longitude}", headers: {"Authorization" => "Token #{Rails.application.secrets.uber_server_token}"})

    # return the number of cars available
    return response["products"].count
  end

end



