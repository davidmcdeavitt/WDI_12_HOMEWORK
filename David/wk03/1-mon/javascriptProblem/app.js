
event.target.textContent = currentPlayer;
// var dataIndex = event.target.getElementById('textArea')
var dataIndex = event.target.getAttribute('data-index');
board[] = dataIndex.dataset.currentPlayer;





// you should tackle it from the simplest part
// var dave = function(input) {
//
//
// if (input === input.toUpperCase()) {
//   console.log('woah chill out');
// } else if (input[input.length-1] === '?') { //question
//   console.log('whoa, chill out!');
// } else if (input.trim() = "") {
//   console.log('fine be that way');
// }else {
//   console.log('whatevs');
// }
// }

//instead of log use return as it will make the function more efficient
var dave = function(input) {


if (input === input.toUpperCase()) {
  return 'woah chill out';
} else if (input[input.length-1] === '?') { //question
  return 'sure';
}  else {
  return 'whatevs';
}
}
var textBox = document.querySelector('.amount')
var sayButton = document.querySelector('button')
var replySpan = document.querySelector('span')
//to clean it up
var handleSayButtonClick = function() {
  var reply = dave(textBox.value);
  replySpan.textContent = reply;
}
sayButton.addEventListener('click', handleSayButtonClick);

textBox.addEventListener('keyup', function(event) {
  if (event.which === 13) {
    handleSayButtonClick();
  }
})
//1st find objects

//2nd get input
// sayButton.addEventListener('click', function() {
    //getting properties from objects
//     var reply = dave(textBox.value);
//     replySpan.textContent = reply;
//
// });
//3rd attach event handling
