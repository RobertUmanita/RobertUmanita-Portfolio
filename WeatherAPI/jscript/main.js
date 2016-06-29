var lat;
var lon;
var imp;
var si;
var ico;
var un = 0;

function getLocation(callback) {
  navigator.geolocation.getCurrentPosition (function (position){
    var coords = position.coords.latitude + "," + position.coords.longitude;
    callback(coords);         
  })
}

getLocation (function(coords){
  var cod = coords.split(',');
  lat = cod[0];
  lon = cod[1];
  alert(lat);  
  $.getJSON("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + lon +"&sensor=false", function(data){
  document.getElementById("location").innerHTML = "Weather for " + data.results[1].formatted_address;  
 });
   $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&units=imperial&APPID=0ea1f68bf3876c3a5ef44e72a4d3bdd6", function(data){
  console.log(data);
  imp = data.main.temp;
  si = (imp - 32) * (5/9); //Celsius
  ico =  data.weather[0].icon;
  console.log(ico);
  document.getElementById("wicon").innerHTML = '<img src="http://openweathermap.org/img/w/' + ico + '.png"/>';
  document.getElementById("location2").innerHTML = data.weather[0].main; 
  document.getElementById("temperature").innerHTML = Math.round(imp) + "&#8457";
  document.getElementById("clouds").innerHTML = data.clouds.all + "% Cloud Cover";

  function init() {
	  	switch (ico) {
	    case "01d": //clear sky
	        document.body.style.background = 'url(sunny.jpg)';
	        break;
	    case "01n":
	        document.body.style.background = 'url(night.jpg)';
	        break;
	    case "02d": //few clouds
	        document.body.style.background = 'url(partly_cloudy.jpg)';
	        break;
	    case "02n":
	        document.body.style.background = 'url(partly_cloudy_night.jpg)';
	        break;
	    case "03d":  //scattered clouds
	        document.body.style.background = 'url(partly_cloudy_night2.jpg)';
	        break;
	    case "03n":  //scattered clouds
	        document.body.style.background = 'url(partly_cloudy_night2.jpg)';
	        break;
	    case "09d":  //rain showers
	        document.body.style.background = 'url(rain_showers.jpg)';
	        break;
	    case "09n":  //rain showers
	        document.body.style.background = 'url(rain_showers.jpg)';
	        break;
	    case "10d":  //rain
	        document.body.style.background = 'url(rain.jpg)';
	        break;
	    case "10n":  //rain
	        document.body.style.background = 'url(rain.jpg)';
	        break;
	    case "11d":  //thunderstorm
	        document.body.style.background = 'url(thunderstorm.jpg)';
	        break;
	    case "11n":  //thunderstorm
	        document.body.style.background = 'url(thunderstorm.jpg)';
	        break;
	    case "13d":  //snow
	        document.body.style.background = 'url(snow.jpg)';
	        break;
	    case "13n":  //snow
	        document.body.style.background = 'url(snow.jpg)';
	        break;
	    case "50d":
	        document.body.style.background = 'url(fog.jpg)';
	        break;
	    case "50n":
	        document.body.style.background = 'url(fog.jpg)';
	        break;         
	} 
  	
	}
	init();
	document.body.style.backgroundSize = 'cover';
	document.body.style.backgroundRepeat = "no-repeat";
	document.body.style.backgroundPosition = 'ceneter';
 
})


$('.change-temp').click(function() {  //Behavior for unit changing button
	switch (un) {
		case 0:
			document.getElementById("temperature").innerHTML = Math.round(si) + '&#8451';
			document.getElementById("change-temp").innerHTML = '&#8457';
			un = 1;
			break;
		case 1:
			document.getElementById("temperature").innerHTML = Math.round(imp) + '&#8457';
			document.getElementById("change-temp").innerHTML = '&#8451';
			un = 0;
			break;
		}

	});
});
