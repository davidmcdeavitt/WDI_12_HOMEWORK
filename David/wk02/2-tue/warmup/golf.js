var scores = {
"Bob": [3, 2, 6, 11, 9, 2, 6, 9, 10],
"Jimbo": [5, 12, 9, 22, 13, 7, 16, 10, 11],
"Fish": [2, 2, 4, 5, 4, 3, 6, 4, 1]
};
var totalScores = function() {
  var players = Object.keys(scores);
  players.forEach(function(player) {
    scores[player].forEach(function(score, index, scores) {
      console.log("Player: " + player + " Score: " + score + " Score average: " + (score/scores.length))
    });
  });
};

// var par = [3, 4, 5, 5, 3, 3, 4, 3, 5];
// var toPar = function(obj.scores.card, par){
//   return forEach(name)
// }
