
//need to recognize if a string is equal to reachother front and background-color

function pally(word) {
  return word === word.split("").reverse().join("")
}
console.log(pally("racecar"));
