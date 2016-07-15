//Grab geo location and assemble json
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude + "&units=imperial&APPID=42a747e29b71f50616529415fc4e1359", function(json) {
      console.log(json);
      //Display the weather
      $("#temp").html(Math.ceil(json.main.temp) + '˚' + ' <br/><br/><img width="128" src="PNG/' + json.weather[0].icon + '.png"' + ' />');
      $("#city").html(json.name + ', ' + json.sys.country + ' is experiencing ' + json.weather[0].main);

      //Changing the format to celsius and fahrenheit
      $("#cel").click(function() {
        $("#temp").html(Math.ceil((Math.ceil(json.main.temp) - 32) / 1.8) + '˚' + ' <br/><br/><img width="128" src="PNG/' + json.weather[0].icon + '.png"' + ' />');
      });
      $("#fah").click(function() {
        $("#temp").html(Math.ceil(json.main.temp) + '˚' + ' <br/><br/><img width="128" src="PNG/' + json.weather[0].icon + '.png"' + ' />');
      });
    });
  });
}

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
