//Grab geo location and assemble json
var state;
$(function() {
  //Get region info from IP
  $.getJSON("http://ip-api.com/json", function(jsonIP) {
    state = jsonIP.region;

    //Use location to get weather and stuff
    navigator.geolocation.getCurrentPosition(function(position) {
      $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude + "&units=imperial&APPID=42a747e29b71f50616529415fc4e1359", function(json) {
        //Display the weather
        $("#temp").html(Math.ceil(json.main.temp) + '˚' + ' <br/><br/><img width="128" src="PNG/' + json.weather[0].icon + '.png"' + ' />');
        $("#city").html(json.name + ', ' + state + ' is experiencing ' + json.weather[0].main);

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
});

//Style changes when changing format of temperature
$("#cel").click(function(){
    $("#fah").removeClass('active');
    $("#cel").addClass('active');
});
$("#fah").click(function(){
    $("#cel").removeClass('active');
    $("#fah").addClass('active');
});
