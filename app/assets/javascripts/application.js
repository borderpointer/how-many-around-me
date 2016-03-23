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

  function setChart() {

    $.ajax({
      type: "GET",
      url: "/api/cars",
      dataType: 'json',
      success: function(data){

        var receivedData = data;

        $('#chart-container').highcharts({
          title: {
            text: 'Number of Available Uber Cars Near My Apartment',
              x: -20 //center
          },
          xAxis: {
            categories: (function() {
              var newDateData = [];
              for (var i = 0; i < receivedData.length; i++) {
                console.log(receivedData[i].created_at)
                newDateData.push(dateFormat(receivedData[i].created_at, "mmmm dS, h:MM TT"))
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
            data: (function() {
              var newQuantityData = [];
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
  // create the chart initially so that there is no delay at first
  setChart();

  setInterval(function(){
    setChart();
  }, 60000);

});