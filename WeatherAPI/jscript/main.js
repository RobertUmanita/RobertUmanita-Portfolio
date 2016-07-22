var lat;
var lon;
var imp;
var si;
var ico;
var un = 0;
var skycons = new Skycons({"color": "black"}), 
	list = [ "clear-day", "clear-night", "partly-cloudy-day",
        "partly-cloudy-night", "cloudy", "rain", "sleet", "snow", "wind",
        "fog"];

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
    
  $.getJSON("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + lon +"&sensor=false", function(data){
  document.getElementById("location").innerHTML = "Weather for " + data.results[1].formatted_address;  
 });
   $.getJSON("https://api.forecast.io/forecast/a50f59a2e9e0619c7cacecfae00b9827/" + lat + "," + lon + "?callback=?", function(data){
  
  imp = data.currently.temperature;
  si = (imp - 32) * (5/9); //Celsius
  ico =  data.currently.icon;
  
  
  ico = ico.toString();
  
  
 
  

  document.getElementById("temperature").innerHTML = Math.round(imp) + "&#8457";
  document.getElementById("clouds").innerHTML = "It will be " + data.minutely.summary.toLowerCase() + "<br><br> Expect " + data.hourly.summary.toLowerCase() + "<br><br> This week: " + data.daily.summary;

  function init() {
	  	if (ico === "clear-day") {
	  		skycons.add("icon1", Skycons.CLEAR_DAY);
	  		document.body.style.background = 'url(sunny.jpg)';
	  	} else if (ico === "clear-night") {
	  		skycons.add("icon1", Skycons.CLEAR_NIGHT);
	  		document.body.style.background = 'url(night.jpg)';
	  	} else if (ico === "partly-cloudy-day") {
	  		skycons.add("icon1", Skycons.PARTLY_CLOUDY_DAY);
	  		document.body.style.background = 'url(partly_cloudy.jpg)';
	  	} else if (ico === "partly-cloudy-night") {
	  		skycons.add("icon1", Skycons.PARTLY_CLOUDY_NIGHT);
	  		document.body.style.background = 'url(partly_cloudy_night.jpg)';
	  	} else if (ico === "cloudy") {
	  		skycons.add("icon1", Skycons.CLOUD_DAY);
	  		document.body.style.background = 'url(partly_cloudy_night2.jpg)';
	  	} else if (ico === "rain") {
	  		skycons.add("icon1", Skycons.RAIN);
	  		document.body.style.background = 'url(rain_showers.jpg)';
	  	} else if (ico === "sleet") {
	  		skycons.add("icon1", Skycons.SLEET);
	  		document.body.style.background = 'url(rain.jpg)';
	  	} else if (ico === "snow") {
	  		skycons.add("icon1", Skycons.SNOW);
	  		document.body.style.background = 'url(snow.jpg)';
	  	} else if (ico === "wind") {
	  		skycons.add("icon1", Skycons.WIND);
	  		document.body.style.background = 'url(thunderstorm.jpg)';
	  	} else if (ico === "fog") {
	  		skycons.add("icon1", Skycons.FOG);
	  		document.body.style.background = 'url(fog.jpg)';
	  	}
	        
	} 
  	
	
	init();
	skycons.play();
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
