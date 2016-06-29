var audio = new Audio('http://starmen.net/mother2/soundfx/phonering.wav');

var slength = 60 * 25;

var alarm = false;


function pomTimer (time, display) {
  var timer = time, min, sec;
  setInterval(function () {
    min = parseInt(timer / 60, 10);
    sec = parseInt(timer % 60, 10);

    min = min < 10 ? "" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    display.textContent = min + ":" + sec;

    if (--timer < 0) {
      timer = 0;
      alarm = true;
      
      //timer = time;
    }
  }, 1000)
  //timer = time;
}
var s = 25;


function sessionAdd () {
  s = s + 1;
  document.getElementById('slength').value = s + ":00";
  document.getElementById('display2text').innerHTML = s + ":00";
}

function sessionSubtract () {
  s = s - 1;
  document.getElementById('slength').value = s + ":00";
  document.getElementById('display2text').innerHTML = s + ":00";
}

var sessionLength = 60 * s;

function Go () {
  var fiveMinutes = 60 * s,
  display = document.querySelector('#display2text');
  document.getElementById("row1").style.display = "none";
  document.getElementById("row2").style.display = "none"; 
  pomTimer(fiveMinutes, display);

}



function Reset () {
  timer = 60 * 25;
  alarm = false;
  document.getElementById('slength').value = s + ":00";
  document.getElementById('display2text').innerHTML = s + ":00";
}

document.onload = function() {
  if (alarm === true) {
   audio.play();
      for (var i = 1; i < 6; i++) {
        setTimeout(function(){
          audio.play();
        }, i * 900);
      }
}
}