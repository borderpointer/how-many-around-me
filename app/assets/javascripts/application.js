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

  $.ajax({
    type: "GET",
    url: "/api/cars",
    dataType: 'json',
    success: function(data){
      $('#chart-container').highcharts({
        title: {
          text: 'Number of Available Uber Cars Near My Apartment',
            x: -20 //center
        },
        xAxis: {
          categories: [dateFormat(data[0].created_at, "dddd, mmmm dS, yyyy, h:MM:ss TT")]
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
          data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
        }]
      });
      // options.series[0].setData(data);
    }
  });
});