namespace :cars do
  desc "Rake task to retrieve cars data from Uber's API"
  task fetch: :environment do
    cars = Car.api_call
    @car = Car.new(:quantity => cars)
    if @car.save
      puts "At #{Time.now} the record has been created!"
    else
      puts "Error has occurred"
    end
  end
end