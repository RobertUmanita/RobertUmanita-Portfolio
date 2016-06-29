var a, b, equals, display, operater, last_operarter;
var next_count = 0;
var dec_count = 0;

display = '';

function Update() {
	document.getElementById('input').innerHTML = display;
}

function Clear() {
	a = null;
	b = null;
	equals = null;
	display = '';
	operater = null;
	last_operater = null;
	next_count = 0;
	document.getElementById('input').innerHTML = display;
	document.getElementById('input2').innerHTML = display;
	document.getElementById('input3').innerHTML = display;
}

function Backspace() {
	console.log(display[display.length - 1]);
	display = display.slice(0, display.length - 1);
	Update();
	console.log(display);
}
function Equals() {
	Next();
	a = equals;
	next_count = 0;

}

function Next() {
	if (!isNaN(a)) {
		if (next_count === 0) {
			a = parseFloat(display);
			console.log(a);
		} else {
			b = a;

			a = parseFloat(display);
			if (isNaN(b)) {
				b = equals;
			}
			console.log(a);
		}
	}
	
	if (next_count > 0) {
		
		if (last_operater == 'X') {
			equals = a * b;
		} else if (last_operater == '+') {
			equals = a + b;
		} else if (last_operater == '-') {
			equals = b - a;
		} else if (last_operater == '&#247') {
			equals = b / a;
		}
		console.log('=');
		console.log(equals);
		a = equals;
		if (!isNaN(a)) {
			document.getElementById('input2').innerHTML = equals.toString();
			last_operater = operater;
		} else {
			Clear();
		}
		
		
	} else {
		last_operater = operater;
		document.getElementById('input2').innerHTML = display;
		document.getElementById('input3').innerHTML = operater;
	}
		
	
	display = '';
	Update();
	next_count++;
	
}

function One() {
  display = display + "1";
  Update();
}

function Two() {
  display = display + "2";
  Update();
}

function Three() {
  display = display + "3";
  Update();
}

function Four() {
  display = display + "4";
  Update();
}

function Five() {
  display = display + "5";
  Update();
}

function Six() {
  display = display + "6";
  Update();
}

function Seven() {
  display = display + "7";
  Update();
}

function Eight() {
  display = display + "8";
  Update();
}

function Nine() {
  display = display + "9";
  Update();
}

function Zero() {
  display = display + "0";
  Update();
}

function Decimal() {
	if (dec_count === 0) {
		display = display + ".";
  	Update();
  	dec_count++;
	}
  
}

function Multiply() {
	operater = 'X';
	Next();
	console.log('*');
}

function Add() {
	operater = '+';
	Next();
	console.log('+');
}

function Minus() {
	operater = '-';
	Next();
	console.log('-');
}

function Divide() {
	operater = '&#247';
	Next();
	console.log('/');
}