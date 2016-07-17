//Grab geo location and assemble json
var lat;
var long;
var city;
var state;
$(function() {
  //Get location info from IP
  $.getJSON("http://ip-api.com/json", function(jsonIP) {
    lat = jsonIP.lat;
    long = jsonIP.lon;
    city = jsonIP.city;
    state = jsonIP.region;

    //Use location to get weather and stuff
    //$.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + long + "&units=imperial&APPID=42a747e29b71f50616529415fc4e1359", function(json) {});
    $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&APPID=42a747e29b71f50616529415fc4e1359", function(json) {
      //Display the weather
      $("#temp").html(Math.ceil(json.main.temp) + '˚' + ' <br/><br/><img width="128" src="PNG/' + json.weather[0].icon + '.png"' + ' />');
      $("#city").html(city + ', ' + state + ' is experiencing ' + json.weather[0].main);

      //Changing the format to celsius and fahrenheit
      $("#cel").click(function() {
        $("#temp").html(Math.ceil((Math.ceil(json.main.temp) - 32) / 1.8) + '˚' + ' <br/><br/><img width="128" src="PNG/' + json.weather[0].icon + '.png"' + ' />');
      });
      $("#fah").click(function() {
        $("#temp").html(Math.ceil(json.main.temp) + '˚' + ' <br/><br/><img width="128" src="PNG/' + json.weather[0].icon + '.png"' + ' />');
      });
    });
  });
});

//Style changes when changing format of temperature
$("#cel").click(function(){
    $("#fah").removeClass('btn-info');
    $("#fah").addClass('btn-default');
    $("#fah").removeClass('active');
    $("#cel").addClass('btn-info');
    $("#cel").addClass('active');
});
$("#fah").click(function(){
    $("#cel").removeClass('btn-info');
    $("#cel").addClass('btn-default');
    $("#cel").removeClass('active');
    $("#fah").addClass('btn-info');
    $("#fah").addClass('active');
});
