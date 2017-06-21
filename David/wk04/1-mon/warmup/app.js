var map1 = [
["A","A","A","A","A"],
["A","A","A","A","A"],
["A","A","X","A","A"],
["A","A","A","A","A"],
["A","A","A","A","A"]
];

var trashTreasure = []

// var treasureFinder = function() {
//   for (var i = 0; i < map1.length; i++) {
//     map1[i].Array.splice("X")
//     console.log(map1[i].Array.splice("X"));
//     }
//   }
for (i = 0; i < map1.length; i++) {
  for (j = 0; j < map1[i]; i++) {
    alert (map1[i][j].slice('X') === 'X')
  }
}
