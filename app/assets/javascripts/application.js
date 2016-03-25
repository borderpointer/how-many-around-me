// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree .
//= require turbolinks
//= require bootstrap-sprockets

$(function () {

  // style options for the line graph
  Highcharts.setOptions({
      chart: {
          type: 'line',
          plotBackgroundColor: {
            linearGradient: [0, 0, 500, 500],
            stops: [
                [0, 'rgb(150, 125, 255)'],
                [1, 'rgb(255, 100, 10)']
            ]
          },
          style: {
              fontFamily: '"Montserrat", Helvetica, sans-serif',
              fontSize: '16px'
          },
          marginTop: 50
      }
  });

  // this function makes ajax calls to the app's api and draws the line graph and
  // updates the table
  function setChartAndTable() {

    $.ajax({
      type: "GET",
      url: "/api/cars",
      dataType: 'json',
      success: function(data){

        // assigning the data from the ajax call to a local variable so that the value can be captured
        var receivedData = data;

        // everytime the ajax call is made, empty the tbody so that there are no duplicates in the table
        $('#table-body').empty();

        // go through each item from the receivedData and populate the table
        for (var i = 0; i < receivedData.length; i++) {
          $('#table-body').append(
            "<tr>" +
            "<td>" + receivedData[i].id + "</td>" +
            "<td>" + receivedData[i].quantity + "</td>" +

            // date formatting using date.format.js
            "<td>" + dateFormat(receivedData[i].created_at, "mmmm dd, yyyy, h:MM TT") + "</td>" +
            "</tr>"
            );
        }

        // draw the line graph
        $('#chart-container').highcharts({
          title: {
            text: 'Number of Available Uber Cars Near My Apartment',
              x: -20 //center
          },
          xAxis: {
            // populate the x axis with the create_at data from receivedData
            categories: (function() {
              var newDateData = [];

              // iterate through each item from the receivedData and push in the created_at value
              // into the newDateData array
              for (var i = 0; i < receivedData.length; i++) {
                console.log(receivedData[i].created_at)
                newDateData.push(dateFormat(receivedData[i].created_at, "mmmm, dd yyyy, h:MM TT"))
              }
              return newDateData;
            }())
          },
          yAxis: {
            title: {
              text: 'Number of Cars'
              },
            plotLines: [{
              value: 0,
              width: 1,
              }]
          },
          tooltip: {
            valueSuffix: ' Cars'
          },
          legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
          },
          series: [{
            name: ' ',
            color: '#f6f6f6',
            // populate the y axis with the quantity data from receivedData
            data: (function() {

              var newQuantityData = [];

              // iterate through each item from the receivedData and push in the quantity value
              // into the newQuantityData array
              for (var i = 0; i < receivedData.length; i++) {
                console.log(receivedData[i].quantity)
                newQuantityData.push(receivedData[i].quantity)
              }
              return newQuantityData;
            }())
          }]
        });
      }
    });
  }

  // create the chart and table initially so that there is no delay at first
  setChartAndTable();

  // call the function that makes the ajax calls and creates the graph and table at the given interval
  setInterval(function(){
    setChartAndTable();
  }, 30000);

});