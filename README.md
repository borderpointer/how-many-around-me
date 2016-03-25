# How Many Around Me

### Ruby Version

- 2.2.3

### Gems Used:
- Rails - 4.2
- Postgresql - 0.15
- Sass - 5.0
- Bootstrap-Sass - 3.3.6
- Httparty - 0.13.7
- Whenever - 0.9.4

### Synopsis

How Many Around Me is a simple app that records how many Uber cars are around my apartment in a 10 minute interval from Uber's API, stores the data into the local database, and charts the data in a graph and table every minute.

### Installation

Live app available [here](http://how-many-around-me.herokuapp.com/)

#### To Run the App Locally

• clone this repo in Terminal while in your desired directory: `git clone git@github.com:borderpointer/how-many-around-me.git`

• cd into the directory: `cd how-many-around-me`

• install all gem dependencies: `bundle install`

• to change the location in which it tracks how many cars are available at: go to `car.rb` file and change the variables `latitude` and `longitude` to your desired latitude and longitude coordinates

• create the local database: `rake db:create`

• make sure the cron job is working: `whenever --update-crontab`

• run the app: `rails s`

• watch the data come in and the graph and table update every minute