
function getRandom() {
	  return Math.floor(Math.random()*(3 + 1));
	}
	var x;
  var audio_green = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
  var audio_red = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
  var audio_blue = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');  
  var audio_yellow = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');
	
	audio_green.addEventListener("load", function() { 
  audio_green.play(); 
  $(".duration span").html(audio_green.duration);
  $(".filename span").html(audio_green.src);
}, true);

	audio_red.addEventListener("load", function() { 
  audio_red.play(); 
  $(".duration span").html(audio_red.duration);
  $(".filename span").html(audio_red.src);
}, true);

	audio_blue.addEventListener("load", function() { 
  audio_blue.play(); 
  $(".duration span").html(audio_blue.duration);
  $(".filename span").html(audio_blue.src);
}, true);

	audio_yellow.addEventListener("load", function() { 
  audio_yellow.play(); 
  $(".duration span").html(audio_yellow.duration);
  $(".filename span").html(audio_yellow.src);
}, true);

	var moves = [];
	var com_turn = true;


	for (var i = 0; i < 20; i++) {
	  var move = getRandom();
	  moves.push(move);
	}
	console.log(moves);
	console.log(moves.length);

	function errorCheck(x) {
		var hardmode = document.getElementById("strictbox").checked;
		if (x !== moves[player_counter]) {
			if (hardmode) {
				
				alert("Wrong!");
				location.reload();
			} else {
				alert("Wrong!");
				com_turn = true;
			}
		} else {
			player_counter++;
		}
	}

	function simonMoves() {

		if (com_turn) {
			player_counter = 0;
			for (var i = 0; i < move_counter; i++) {
			
			console.log(moves[i]);
			if (moves[i] === 0) {
				setTimeout(function(){
					
					audio_green.play();
					document.getElementById('green').style.background = "green";
				}, inter);
				setTimeout(function(){
					document.getElementById('green').style.background = "#5cb85c";
			
				}, inter + inter_a);
				
				
				
			} else if (moves[i] === 1) {
				setTimeout(function(){
					document.getElementById('red').style.background = "#d9534f";
					audio_red.play();
					document.getElementById('red').style.background = "red";
				}, inter);
				setTimeout(function(){
					document.getElementById('red').style.background = "#d9534f";
					
				}, inter + inter_a);
				
					
							
			} else if (moves[i] === 2) {
				setTimeout(function(){
					
					audio_blue.play();
					document.getElementById('blue').style.background = "blue";

				}, inter);
				setTimeout(function(){
					document.getElementById('blue').style.background = "#337ab7";
					
					
				}, inter + inter_a);
				
				
				
			} else if (moves[i] === 3) {
				setTimeout(function(){
					
					audio_yellow.play();				
					document.getElementById('yellow').style.background = "yellow";
				}, inter);
				setTimeout(function(){
					document.getElementById('yellow').style.background = "#f0ad4e";
					
				}, inter + inter_a);
				
				

			}
			inter = inter + inter_b;
		}
		com_turn = false;
		if (move_counter < 7) {
			inter = 500;
		} else if (move_counter >= 7 && move_counter < 13) {
			inter = 500;
			inter_a = 250;
			inter_b = 750;
		} else if (move_counter >= 13) {
			inter = 250;
			inter_a = 250;
			inter_b = 500;
		}
		
	} 
}

function gameCheck(){
	if (player_counter === move_counter){
		move_counter++;
		if (move_counter == 21) {
			alert("You won!");
			location.reload();
		}
		com_turn = true;
	}
}
var move_counter = 1;
var your_moves = [];
var player_counter = 0;
	var your_move;
	var inter = 500;
	var inter_a = 500;
	var inter_b = 1000;

	function greenButton() {
		audio_green.play();
		your_move = 0;
		errorCheck(your_move);
		gameCheck();

		setTimeout(Game(), 1000);		
	}
	function redButton() {
		audio_red.play();
		your_move = 1;
		errorCheck(your_move);
		gameCheck();
		setTimeout(Game(), 1000);	
	}
	function blueButton() {
		audio_blue.play();
		your_move = 2;
		errorCheck(your_move);		
		gameCheck();
		setTimeout(Game(), 1000);	
	}
	function yellowButton() {
		audio_yellow.play();
		your_move = 3;
		errorCheck(your_move);
		gameCheck();
		setTimeout(Game(), 1000);			
	}
function Game() {
	document.getElementById("strictbox").disabled = true;
	document.getElementById('scoreh').innerHTML = move_counter;
	setTimeout(simonMoves(), 5000);	
	
}