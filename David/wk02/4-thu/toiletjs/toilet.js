// var doSomething = function () {
//   console.log('ooops');
// }
// console.log('hey');
//when log runs it must finish before doing anything else
// console.log('now');
// setTimeout(doSomething, 5000);
// console.log('you');
//order of logs remains the same when sychronous
//this is asynchronous
for (seconds++) {
  return (seconds + 1)
}

var timer = function(seconds, timerId) {
var seconds = scope.setInterval(
var timerId = scope.setInterval(
}

var start = function() {

  return document.getElementById('timer').innerHTML = "Time elapsed " + updateTime;
}

var reset = function() {
  clearInterval(start)

}
var pause = function() {
  setTimeout(updateTime, 500000)
}

var startBtn = document.querySelector('#startBtn');
startBtn.addEventListener('click', start);

var pauseBtn = document.querySelector('#pauseBtn');
pauseBtn.addEventListener('click', pause);

var resetBtn = document.querySelector('#resetBtn');
resetBtn.addEventListener('click', reset);







//these events are running constantly waiting for an event
//these are asynchronous
