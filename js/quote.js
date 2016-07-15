//Grab geo location and assemble json
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude + "&units=imperial&APPID=42a747e29b71f50616529415fc4e1359", function(json) {
      console.log(json);
      //temperature in fahrenheit
      $("#temp").html(Math.ceil(json.main.temp) + '˚' + ' <br/><img width="128" src="https://github.com/archelon14/weather/blob/gh-pages/PNG/' + json.weather[0].icon + '.png"' + ' />');
      $("#city").html(json.name + ', ' + json.sys.country + ' is experiencing ' + json.weather[0].main);
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
