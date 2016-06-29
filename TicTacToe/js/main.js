$(document).ready(function() {
	
 function getRandom() {
            return Math.floor(Math.random()*(8 + 1));
      }

      var moves = [];


      for (var i = 0; i < 300; i++) {
            var move = getRandom();
            moves.push(move);
      }
      console.log(moves);

      function isZero(value) {
        return value !== 0;
      }
      function isOne(value) {
        return value !== 1;
      }
      function isTwo(value) {
        return value !== 2;
      }
      function isThree(value) {
        return value !== 3;
      }
      function isFour(value) {
        return value !== 4;
      }
      function isFive(value) {
        return value !== 5;
      }
      function isSix(value) {
        return value !== 6;
      }
      function isSeven(value) {
        return value !== 7;
      }
      function isEight(value) {
        return value !== 8;
      }

      function isMoved(value) {
        return value !== moves[g];
      }
      function myMoved(value) {
        return value !== lastMove;
      }
      function myStarted(value) {
        return value !== go;
      }

      function filterZero() {
        moves = moves.filter(isZero);
        console.log(moves);
      }
      function filterOne() {
        moves = moves.filter(isOne);
        console.log(moves);
      }
      function filterTwo() {
        moves = moves.filter(isTwo);
        console.log(moves);
      }
      function filterThree() {
        moves = moves.filter(isThree);
        console.log(moves);
      }
      function filterFour() {
        moves = moves.filter(isFour);
        console.log(moves);
      }
      function filterFive() {
        moves = moves.filter(isFive);
        console.log(moves);
      }
      function filterSix() {
        moves = moves.filter(isSix);
        console.log(moves);
      }
      function filterSeven() {
        moves = moves.filter(isSeven);
        console.log(moves);
      }
      function filterEight() {
        moves = moves.filter(isEight);
        console.log(moves);
      }

      function filterMoves() {
        moves = moves.filter(isMoved);
        console.log(moves);
      }

      function filterMyMoves() {
        moves = moves.filter(myMoved);
        console.log(moves);
      }
      function filterStart() {
        moves = moves.filter(myStarted);
        console.log(moves);
      }



      var win = false;
      var arr = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
      var barr = [false, false, false, false, false, false, false, false, false];
      var start = [0, 2, 6, 8];
      var rand = Math.floor(Math.random()*(3 + 1));
      var go = start[rand];
      var off = false;
      var g = 0;
      var lastMove;
      arr[go] = 'X';
      barr[go] = true;
      document.getElementById("gamebox"+ go).innerHTML = 'X';
      filterStart();

      
      
      g++;


      function clearGame() {
        for (var i = 0; i < 9; i++) {
          document.getElementById("gamebox" + i).innerHTML = '_';
          console.log(i);
        }
        win = false;
        arr = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
        barr = [false, false, false, false, false, false, false, false, false];
        moves = [];
        for (var i = 0; i < 300; i++) {
              var move = getRandom();
              moves.push(move);
        }
        rand = Math.floor(Math.random()*(3 + 1));
        go = start[rand];
        g = 0;
        arr[go] = 'X';
        barr[go] = true;
        document.getElementById("gamebox"+ go).innerHTML = 'X';
        filterStart();
        g++;
      }

      function checkWin() {
        if (arr[0] === 'X' && arr[1] === 'X' && arr[2] === 'X'){
          alert("X wins");
          win = true;
        } else if (arr[0] === 'X' && arr[3] === 'X' && arr[6] === 'X') {
          alert("X wins");
          win = true;
        } else if (arr[1] === 'X' && arr[4] === 'X' && arr[7] === 'X') {
          alert("X wins");
          win = true;
        } else if (arr[3] === 'X' && arr[4] === 'X' && arr[5] === 'X') {
          alert("X wins"); 
          win = true;
        } else if (arr[6] === 'X' && arr[7] === 'X' && arr[8] === 'X') {
          alert("X wins"); 
          win = true;
        } else if (arr[2] === 'X' && arr[5] === 'X' && arr[8] === 'X') {
          alert("X wins");
          win = true;
        } else if (arr[0] === 'X' && arr[4] === 'X' && arr[8] === 'X') {
          alert("X wins");
          win = true;
        } else if (arr[2] === 'X' && arr[4] === 'X' && arr[6] === 'X') {
          alert("X wins");
          win = true;
        } else  if (arr[0] === 'O' && arr[1] === 'O' && arr[2] === 'O'){
          alert("O wins");
          win = true;
        } else if (arr[0] === 'O' && arr[3] === 'O' && arr[6] === 'O') {
          alert("O wins");
          win = true;
        } else if (arr[1] === 'O' && arr[4] === 'O' && arr[7] === 'O') {
          alert("O wins");
          win = true;
        } else if (arr[0] === 'O' && arr[3] === 'O' && arr[6] === 'O') {
          alert("O wins");
          win = true;
        } else if (arr[3] === 'O' && arr[4] === 'O' && arr[5] === 'O') {
          alert("O wins"); 
          win = true;
        } else if (arr[2] === 'O' && arr[5] === 'O' && arr[8] === 'O') {
          alert("O wins");
          win = true;
        } else if (arr[0] === 'O' && arr[4] === 'O' && arr[8] === 'O') {
          alert("O wins");
          win = true;
        } else if (arr[2] === 'O' && arr[4] === 'O' && arr[6] === 'O') {
          alert("O wins");
          win = true;
        } else if (barr[0] === true && barr[1] === true && barr[2] === true && barr[3] === true && barr[4] === true && barr[5] === true && barr[6] === true && barr[7] === true && barr[8] === true){
          var playAgain = prompt('Would you like to play again?');
          win = true;
        }
      }

      
      

  function newMove() {
    checkWin();
    filterMyMoves();
    if (win === false){
      if (g == 1) {
        if (barr[0] === false){
          arr[0] = 'X';
          barr[0] = true;
          document.getElementById("gamebox0").innerHTML = 'X';
          filterZero();
          console.log(g);
          g++;
          console.log('arr[0]')
        } else if (barr[2] === false){
          arr[2] = 'X';
          barr[2] = true;
          document.getElementById("gamebox2").innerHTML = 'X';
          filterTwo();
          console.log(g);
          g++;
        } else if (barr[6] === false){
          arr[6] = 'X';
          barr[6] = true;
          document.getElementById("gamebox6").innerHTML = 'X';
          filterSix();
          console.log(g);
          g++;
        } else if (barr[8] === false){
          arr[8] = 'X';
          barr[8] = true;
          document.getElementById("gamebox8").innerHTML = 'X';
          filterEight();
          console.log(g);
          g++;
        } else {
          arr[moves[g]] = 'X';
          barr[moves[g]] = true;
          document.getElementById("gamebox"+ moves[g]).innerHTML = 'X'; 
          filterMoves();
          console.log(g);
          g++;
        }
      } else if (g == 'x') {
        if (arr[0] == 'X' && arr[2] == 'X' && barr[1] === false) {
          arr[1] = 'X';
          barr[1] = true;
          document.getElementById("gamebox1").innerHTML = 'X';
          filterOne();
          console.log(g);
          g++;
        } else if (arr[2] == 'X' && arr[8] == 'X' && barr[5] === false) {
          arr[5] = 'X';
          barr[5] = true;
          document.getElementById("gamebox5").innerHTML = 'X';
          filterFive();
          console.log(g);
          g++;
        } else if (arr[8] == 'X' && arr[6] == 'X' && barr[7] === false) {
          arr[7] = 'X';
          barr[7] = true;
          document.getElementById("gamebox7").innerHTML = 'X';
          filterSeven();
          console.log(g);
          g++;
        } else if (arr[2] == 'X' && arr[6] == 'X' && barr[3] === false) {
          arr[3] = 'X';
          barr[3] = true;
          document.getElementById("gamebox3").innerHTML = 'X';
          filterThree();
          console.log(g);
          g++;
        } else if (barr[2] === false){
          arr[2] = 'X';
          barr[2] = true;
          document.getElementById("gamebox2").innerHTML = 'X';
          filterTwo();
          console.log(g);
          g++;
        } else if (barr[6] === false){
          arr[6] = 'X';
          barr[6] = true;
          document.getElementById("gamebox6").innerHTML = 'X';
          filterSix();
          console.log(g);
          g++;
        } else if (barr[8] === false){
          arr[8] = 'X';
          barr[8] = true;
          document.getElementById("gamebox8").innerHTML = 'X';
          filterEight();
          console.log(g);
          g++;
        } else {
          arr[moves[g]] = 'X';
          barr[moves[g]] = true;
          document.getElementById("gamebox"+ moves[g]).innerHTML = 'X'; 
          filterMoves();
          console.log(g);
          g++;
        }
      } else if (g > 1) {
        if (arr[0] == 'X' && arr[2] == 'X' && barr[1] === false) {
          arr[1] = 'X';
          barr[1] = true;
          document.getElementById("gamebox1").innerHTML = 'X';
          filterOne();
          console.log(g);
          g++;
        } else if (arr[2] == 'X' && arr[8] == 'X' && barr[5] === false) {
          arr[5] = 'X';
          barr[5] = true;
          document.getElementById("gamebox5").innerHTML = 'X';
          filterFive();
          console.log(g);
          g++;
        } else if (arr[8] == 'X' && arr[6] == 'X' && barr[7] === false) {
          arr[7] = 'X';
          barr[7] = true;
          document.getElementById("gamebox7").innerHTML = 'X';
          filterSeven();
          console.log(g);
          g++;
        } else if (arr[2] == 'X' && arr[6] == 'X' && barr[4] === false) {
          arr[4] = 'X';
          barr[4] = true;
          document.getElementById("gamebox4").innerHTML = 'X';
          filterFour();
          console.log(g);
          g++;
        } else if (arr[0] == 'X' && arr[1] == 'X' && barr[2] === false){
          arr[2] = 'X';
          barr[2] = true;
          document.getElementById("gamebox2").innerHTML = 'X';
          filterTwo();
          console.log(g);
          g++;
        } else if (arr[1] == 'X' && arr[2] == 'X' && barr[0] === false){
          arr[0] = 'X';
          barr[0] = true;
          document.getElementById("gamebox0").innerHTML = 'X';
          filterZero();
          console.log(g);
          g++;
        } else if (arr[0] == 'X' && arr[2] == 'X' && barr[1] === false){
          arr[1] = 'X';
          barr[1] = true;
          document.getElementById("gamebox1").innerHTML = 'X';
          filterOne();
          console.log(g);
          g++;
        } else if (arr[0] == 'X' && arr[3] == 'X' && barr[6] === false){
          arr[6] = 'X';
          barr[6] = true;
          document.getElementById("gamebox6").innerHTML = 'X';
          filterSix();
          console.log(g);
          g++;
        } else if (arr[0] == 'X' && arr[6] == 'X' && barr[3] === false){
          arr[3] = 'X';
          barr[3] = true;
          document.getElementById("gamebox3").innerHTML = 'X';
          filterThree();
          console.log(g);
          g++;
        } else if (arr[3] == 'X' && arr[6] == 'X' && barr[0] === false){
          arr[0] = 'X';
          barr[0] = true;
          document.getElementById("gamebox0").innerHTML = 'X';
          filterZero();
          console.log(g);
          g++;
        } else if (arr[6] == 'X' && arr[7] == 'X' && barr[8] === false){
          arr[8] = 'X';
          barr[8] = true;
          document.getElementById("gamebox8").innerHTML = 'X';
          filterEight();
          console.log(g);
          g++;
        } else if (arr[7] == 'X' && arr[8] == 'X' && barr[6] === false){
          arr[6] = 'X';
          barr[6] = true;
          document.getElementById("gamebox6").innerHTML = 'X';
          filterSix();
          console.log(g);
          g++;
        } else if (arr[6] == 'X' && arr[1] == 'X' && barr[7] === false){
          arr[7] = 'X';
          barr[7] = true;
          document.getElementById("gamebox7").innerHTML = 'X';
          filterSeven();
          console.log(g);
          g++;
        } else if (arr[2] == 'X' && arr[5] == 'X' && barr[8] === false){
          arr[8] = 'X';
          barr[8] = true;
          document.getElementById("gamebox8").innerHTML = 'X';
          filterEight();
          console.log(g);
          g++;
        } else if (arr[5] == 'X' && arr[8] == 'X' && barr[2] === false){
          arr[2] = 'X';
          barr[2] = true;
          document.getElementById("gamebox2").innerHTML = 'X';
          filterTwo();
          console.log(g);
          g++;
        } else if (arr[2] == 'X' && arr[8] == 'X' && barr[5] === false){
          arr[5] = 'X';
          barr[5] = true;
          document.getElementById("gamebox5").innerHTML = 'X';
          filterFive();
          console.log(g);
          g++;
        } else if (arr[3] == 'X' && arr[4] == 'X' && barr[5] === false){
          arr[5] = 'X';
          barr[5] = true;
          document.getElementById("gamebox5").innerHTML = 'X';
          filterFive();
          console.log(g);
          g++;
        } else if (arr[3] == 'X' && arr[5] == 'X' && barr[4] === false){
          arr[4] = 'X';
          barr[4] = true;
          document.getElementById("gamebox4").innerHTML = 'X';
          filterFour();
          console.log(g);
          g++;
        } else if (arr[4] == 'X' && arr[5] == 'X' && barr[3] === false){
          arr[3] = 'X';
          barr[3] = true;
          document.getElementById("gamebox3").innerHTML = 'X';
          filterThree();
          console.log(g);
          g++;
        } else if (arr[1] == 'X' && arr[4] == 'X' && barr[7] === false){
          arr[7] = 'X';
          barr[7] = true;
          document.getElementById("gamebox7").innerHTML = 'X';
          filterSeven();
          console.log(g);
          g++;
        } else if (arr[1] == 'X' && arr[7] == 'X' && barr[4] === false){
          arr[4] = 'X';
          barr[4] = true;
          document.getElementById("gamebox4").innerHTML = 'X';
          filterFour();
          console.log(g);
          g++;
        } else if (arr[4] == 'X' && arr[7] == 'X' && barr[1] === false){
          arr[1] = 'X';
          barr[1] = true;
          document.getElementById("gamebox1").innerHTML = 'X';
          filterOne();
          console.log(g);
          g++;
        } else if (arr[0] == 'X' && arr[1] == 'X' && barr[2] === false){
          arr[2] = 'X';
          barr[2] = true;
          document.getElementById("gamebox2").innerHTML = 'X';
          filterTwo();
          console.log(g);
          g++;
        } else if (arr[0] == 'X' && arr[4] == 'X' && barr[8] === false){
          arr[8] = 'X';
          barr[8] = true;
          document.getElementById("gamebox8").innerHTML = 'X';
          filterEight();
          console.log(g);
          g++;
        } else if (arr[4] == 'X' && arr[8] == 'X' && barr[0] === false){
          arr[0] = 'X';
          barr[0] = true;
          document.getElementById("gamebox0").innerHTML = 'X';
          filterZero();
          console.log(g);
          g++;
        } else if (arr[0] == 'X' && arr[8] == 'X' && barr[4] === false){
          arr[4] = 'X';
          barr[4] = true;
          document.getElementById("gamebox4").innerHTML = 'X';
          filterFour();
          console.log(g);
          g++;
        } else if (arr[2] == 'X' && arr[4] == 'X' && barr[6] === false){
          arr[6] = 'X';
          barr[6] = true;
          document.getElementById("gamebox6").innerHTML = 'X';
          filterSix();
          console.log(g);
          g++;
        } else if (arr[4] == 'X' && arr[6] == 'X' && barr[2] === false){
          arr[2] = 'X';
          barr[2] = true;
          document.getElementById("gamebox2").innerHTML = 'X';
          filterTwo();
          console.log(g);
          g++;
        } else if (arr[2] == 'X' && arr[6] == 'X' && barr[4] === false){
          arr[4] = 'X';
          barr[4] = true;
          document.getElementById("gamebox4").innerHTML = 'X';
          filterFour();
          console.log(g);
          g++;
        } else if (arr[0] == 'O' && arr[1] == 'O' && barr[2] === false){
          arr[2] = 'X';
          barr[2] = true;
          document.getElementById("gamebox2").innerHTML = 'X';
          filterTwo();
          console.log(g);
          g++;
        } else if (arr[1] == 'O' && arr[2] == 'O' && barr[0] === false){
          arr[0] = 'X';
          barr[0] = true;
          document.getElementById("gamebox0").innerHTML = 'X';
          filterZero();
          console.log(g);
          g++;
        } else if (arr[0] == 'O' && arr[2] == 'O' && barr[1] === false){
          arr[1] = 'X';
          barr[1] = true;
          document.getElementById("gamebox1").innerHTML = 'X';
          filterOne();
          console.log(g);
          g++;
        } else if (arr[0] == 'O' && arr[3] == 'O' && barr[6] === false){
          arr[6] = 'X';
          barr[6] = true;
          document.getElementById("gamebox6").innerHTML = 'X';
          filterSix();
          console.log(g);
          g++;
        } else if (arr[0] == 'O' && arr[6] == 'O' && barr[3] === false){
          arr[3] = 'X';
          barr[3] = true;
          document.getElementById("gamebox3").innerHTML = 'X';
          filterThree();
          console.log(g);
          g++;
        } else if (arr[3] == 'O' && arr[6] == 'O' && barr[0] === false){
          arr[0] = 'X';
          barr[0] = true;
          document.getElementById("gamebox0").innerHTML = 'X';
          filterZero();
          console.log(g);
          g++;
        } else if (arr[6] == 'O' && arr[7] == 'O' && barr[8] === false){
          arr[8] = 'X';
          barr[8] = true;
          document.getElementById("gamebox8").innerHTML = 'X';
          filterEight();
          console.log(g);
          g++;
        } else if (arr[7] == 'O' && arr[8] == 'O' && barr[6] === false){
          arr[6] = 'X';
          barr[6] = true;
          document.getElementById("gamebox6").innerHTML = 'X';
          filterSix();
          console.log(g);
          g++;
        } else if (arr[6] == 'O' && arr[1] == 'O' && barr[7] === false){
          arr[7] = 'X';
          barr[7] = true;
          document.getElementById("gamebox7").innerHTML = 'X';
          filterSeven();
          console.log(g);
          g++;
        } else if (arr[2] == 'O' && arr[5] == 'O' && barr[8] === false){
          arr[8] = 'X';
          barr[8] = true;
          document.getElementById("gamebox8").innerHTML = 'X';
          filterEight();
          console.log(g);
          g++;
        } else if (arr[5] == 'O' && arr[8] == 'O' && barr[2] === false){
          arr[2] = 'X';
          barr[2] = true;
          document.getElementById("gamebox2").innerHTML = 'X';
          filterTwo();
          console.log(g);
          g++;
        } else if (arr[2] == 'O' && arr[8] == 'O' && barr[5] === false){
          arr[5] = 'X';
          barr[5] = true;
          document.getElementById("gamebox5").innerHTML = 'X';
          filterFive();
          console.log(g);
          g++;
        } else if (arr[3] == 'O' && arr[4] == 'O' && barr[5] === false){
          arr[5] = 'X';
          barr[5] = true;
          document.getElementById("gamebox5").innerHTML = 'X';
          filterFive();
          console.log(g);
          g++;
        } else if (arr[3] == 'O' && arr[5] == 'O' && barr[4] === false){
          arr[4] = 'X';
          barr[4] = true;
          document.getElementById("gamebox4").innerHTML = 'X';
          filterFour();
          console.log(g);
          g++;
        } else if (arr[4] == 'O' && arr[5] == 'O' && barr[3] === false){
          arr[3] = 'X';
          barr[3] = true;
          document.getElementById("gamebox3").innerHTML = 'X';
          filterThree();
          console.log(g);
          g++;
        } else if (arr[1] == 'O' && arr[4] == 'O' && barr[7] === false){
          arr[7] = 'X';
          barr[7] = true;
          document.getElementById("gamebox7").innerHTML = 'X';
          filterSeven();
          console.log(g);
          g++;
        } else if (arr[1] == 'O' && arr[7] == 'O' && barr[4] === false){
          arr[4] = 'X';
          barr[4] = true;
          document.getElementById("gamebox4").innerHTML = 'X';
          filterFour();
          console.log(g);
          g++;
        } else if (arr[4] == 'O' && arr[7] == 'O' && barr[1] === false){
          arr[1] = 'X';
          barr[1] = true;
          document.getElementById("gamebox1").innerHTML = 'X';
          filterOne();
          console.log(g);
          g++;
        } else if (arr[0] == 'O' && arr[1] == 'O' && barr[2] === false){
          arr[2] = 'X';
          barr[2] = true;
          document.getElementById("gamebox2").innerHTML = 'X';
          filterTwo();
          console.log(g);
          g++;
        } else if (arr[0] == 'O' && arr[4] == 'O' && barr[8] === false){
          arr[8] = 'X';
          barr[8] = true;
          document.getElementById("gamebox8").innerHTML = 'X';
          filterEight();
          console.log(g);
          g++;
        } else if (arr[4] == 'O' && arr[8] == 'O' && barr[0] === false){
          arr[0] = 'X';
          barr[0] = true;
          document.getElementById("gamebox0").innerHTML = 'X';
          filterZero();
          console.log(g);
          g++;
        } else if (arr[0] == 'O' && arr[8] == 'O' && barr[4] === false){
          arr[4] = 'X';
          barr[4] = true;
          document.getElementById("gamebox4").innerHTML = 'X';
          filterFour();
          console.log(g);
          g++;
        } else if (arr[2] == 'O' && arr[4] == 'O' && barr[6] === false){
          arr[6] = 'X';
          barr[6] = true;
          document.getElementById("gamebox6").innerHTML = 'X';
          filterSix();
          console.log(g);
          g++;
        } else if (arr[4] == 'O' && arr[6] == 'O' && barr[2] === false){
          arr[2] = 'X';
          barr[2] = true;
          document.getElementById("gamebox2").innerHTML = 'X';
          filterTwo();
          console.log(g);
          g++;
        } else if (arr[2] == 'O' && arr[6] == 'O' && barr[4] === false){
          arr[4] = 'X';
          barr[4] = true;
          document.getElementById("gamebox4").innerHTML = 'X';
          filterFour();
          console.log(g);
          g++;
        } else if (barr[2] === false){
          arr[2] = 'X';
          barr[2] = true;
          document.getElementById("gamebox2").innerHTML = 'X';
          filterTwo();
          console.log(g);
          g++;
        } else if (barr[6] === false){
          arr[6] = 'X';
          barr[6] = true;
          document.getElementById("gamebox6").innerHTML = 'X';
          filterSix();
          console.log(g);
          g++;
        } else if (barr[8] === false){
          arr[8] = 'X';
          barr[8] = true;
          document.getElementById("gamebox8").innerHTML = 'X';
          filterEight();
          console.log(g);
          g++;
        } else {
          arr[moves[g]] = 'X';
          barr[moves[g]] = true;
          document.getElementById("gamebox"+ moves[g]).innerHTML = 'X'; 
          filterMoves();
          console.log(g);
          g++;
        }
      } 
    } else {
      clearGame();
    }
    checkWin();
    if (win === true) {
      clearGame();
    }    
    
    
    }
    /*if (barr[g] !== false) {
      g++;
      while (barr[g] !== false){
        g++;
      }
      arr[moves[g]] = 'X';
      barr[moves[g]] = true;
      document.getElementById("gamebox"+ moves[g]).innerHTML = 'X';
      g++;
      
    } else {
      arr[moves[g]] = 'X';
      barr[moves[g]] = true;
      document.getElementById("gamebox"+ moves[g]).innerHTML = 'X';
      g++;
    } */
  

	function box0() {
    if (barr[0] === false){
      document.getElementById("gamebox"+ 0).innerHTML = 'O';
      arr[0] = 'O';
      barr[0] = true;
      lastMove = 0;
      newMove();        	
      }	
  }

  function box1() {
    if (barr[1] === false){
      document.getElementById("gamebox"+ 1).innerHTML = 'O';
      arr[1] = 'O';
      barr[1] = true;
      lastMove = 1;
      newMove();          
      } 
  }

  function box2() {
    if (barr[2] === false){
      document.getElementById("gamebox"+ 2).innerHTML = 'O';
      arr[2] = 'O';
      barr[2] = true;
      lastMove = 2;
      newMove();          
      } 
  }

  function box3() {
    if (barr[3] === false){
      document.getElementById("gamebox"+ 3).innerHTML = 'O';
      arr[3] = 'O';
      barr[3] = true;
      lastMove = 3;
      newMove();          
      } 
  }

  function box4() {
    if (barr[4] === false){
      document.getElementById("gamebox"+ 4).innerHTML = 'O';
      arr[4] = 'O';
      barr[4] = true;
      lastMove = 4;
      newMove();          
      } 
  }

  function box5() {
    if (barr[5] === false){
      document.getElementById("gamebox"+ 5).innerHTML = 'O';
      arr[5] = 'O';
      barr[5] = true;
      lastMove = 5;
      newMove();          
      } 
  }

  function box6() {
    if (barr[6] === false){
      document.getElementById("gamebox"+ 6).innerHTML = 'O';
      arr[6] = 'O';
      barr[6] = true;
      lastMove = 6;
      newMove();          
      } 
  }

  function box7() {
    if (barr[7] === false){
      document.getElementById("gamebox"+ 7).innerHTML = 'O';
      arr[7] = 'O';
      barr[7] = true;
      lastMove = 7;
      newMove();          
      } 
  }

  function box8() {
    if (barr[8] === false){
      document.getElementById("gamebox"+ 8).innerHTML = 'O';
      arr[8] = 'O';
      barr[8] = true;
      lastMove = 8;
      newMove();          
      } 
  }


	
	$('#randomSearch').click(function() {  
		//translate(1, 'en');
		//binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001"); // should return "I love FreeCodeCamp!" 

	});

      $('#gamebox0').click(function() {  
            box0();            
      });
      $('#gamebox1').click(function() {  
            box1();            
      });
      $('#gamebox2').click(function() {  
            box2();            
      });
      $('#gamebox3').click(function() {  
            box3();            
      });
      $('#gamebox4').click(function() {  
            box4();            
      });
      $('#gamebox5').click(function() {  
            box5();            
      });
      $('#gamebox6').click(function() {  
            box6();            
      });
      $('#gamebox7').click(function() {  
            box7();            
      });
      $('#gamebox8').click(function() {  
            box8();            
      });
});

