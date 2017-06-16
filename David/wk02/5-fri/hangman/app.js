// markAsDone = function(event) {
//   event.target.className = 'done';
// }
// var listItems = document.querySelectorAll('h3');
//
// var game = function() {}
// first set a button that asks the player to press start
// var startGameButton = document.getElementsByName('startGame');
// startGameButton.addEventListener('click', AnswerValue(), false)
// function AnswerValue() {
//
// startGameButton.addEventListener('click', function(event){
//
//   console.log(event);
//   var newListItem = document.createElement('h3');
//   newListItem.textContent = inputBox.value;
//   list.appendChild( newListItem );
// });

// run program that looks up a random word after the player hits start
// var game = function
var WORDS = ['guitar', 'tamborene', 'flute', 'saxaphone', 'clarenet', 'trumpet', 'violin', 'piano'];
var word="";
var answerArray = [];
function hangEm() {
    var word = WORDS[Math.floor(Math.random() * WORDS.length)];
    var answerArray = []
      for (var i = 0; i < word.length; i++) {
      answerArray[i] = "_";
    }
    document.getElementById('answer').innerHTML= answerArray.join(" ");
    document.getElementById('message').innerHTML= "make a decision already "
}



//recienve aguess from the bastard
function guessIt() {
    var guess = document.getElementById("guess").value;
    var showMessage = "";
  if (guess.length !== 1) {
    showMessage =" Thats too much buddy";
  }else {
    //what if it doesnt meet this
    var i=0;
      for (var i = 0; i < word.length; i++) {
        if (word[i] === guess) {
          answerArray[i] === guess;
          showMessage = "In the Cornhole!!! " + guess + " is it!!!";
        }
      }
    /// for everything else we have to
    var remainingLetters = answerArray.length;
      for (var i = 0; i < answerArray.length; i++) {
        if (answerArray[i] !== '_') {
          remainingLetters -= 1;
        }
      }
    if (remainingLetters === 0) {
      showMessage = "You Bastard";
    }
    //for wrong guess
    if (showMessage === "") {
      showMessage = "Stupid " + guess;
    }
    document.getElementById('answer').innerHTML = answerArray.join(" ");
    document.getElementById('guess').value = "";
  }
  document.getElementById("message").innerHTML = showMessage;
}

///quit buton time
function quit() {
  document.getElementById("message").innerHTML = "wrong it's " + word;
    for (var j = 0; j < word.length; j++) {
      answerArray[j] = word[j];
    }
  //solve this shit
  document.getElementById('answer').innerHTML = answerArray.join(" ");
}


// markAsDone = function(event) {
//   event.target.className = 'done';
// }
//if it is not then it causes a strike count to go up
// after 3 chances the players chances end and the game notifies that the player has lost and can reset the game
//if all the words areuncovered then the game congradulates the player and restarts the game
}
