markAsDone = function(event) {
  event.target.className = 'done';
}
//find all list items
var listItems = document.querySelectorAll('li');

//loop through all items and attach event handling

// for (var index = 0; index < listItems.length; index++) {
//   listItems[index].addEventListener('click', markAsDone)
// }


var list = document.querySelector('ul')
//attach
list.addEventListener('click', function(event) {
  if (event.target.tagName === "LI") {
    markAsDone(event)
  }
});
//find the input box
var inputBox = document.querySelector('input');
//find the button
var btn = document.querySelector('button');
//attach event handling
btn.addEventListener('click', function(event){

  console.log(event);
  var newListItem = document.createElement('li');
  newListItem.textContent = inputBox.value;
  list.appendChild( newListItem );
});

inputBox.addEventListener('keypress', function(event) {
  if (event.keyCode === 13) {
  console.log(click(btn))
  }
});
//
//CREATING ELEMENTS
