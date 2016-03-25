namespace :cars do
  desc "Rake task to retrieve cars data from Uber's API"
  # call the api_call method from the Car model and save the retrieved data into the database
  task fetch: :environment do
    @cars = Car.api_call
    @new_car = Car.new(:quantity => @cars)
    if @new_car.save
      # confirm save by printing the below statement into cron_log.log
      puts "At #{Time.now} the record has been created!"
    else
      puts "Error has occurred"
    end
  end
end