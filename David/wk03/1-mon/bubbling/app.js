//eliminate after listener moved into parent
// var div1 = document.getElementsByTagName('div')[0]
// var div2 = document.getElementsByTagName('div')[1]

var input =document.getElementById('input')[0]

var parent = document.getElementsByClassName('parent')[0]
//no not try and just say div in general



//two basic functions to create buttons on the div area
//this is one function
// var logText = function() {
//   console.log(div1.textContent);
// }
// div1.addEventListener('click', logText)

//this is the scond

// var secondText = function() {
//   console.log(div2.textContent);
// }
// div2.addEventListener('click', secondText)

//how could we shorten this to make the function more flexable

// pass an arguement asking if div 1 or div 2
// var logText = function(container) {
//   console.log(container.textContent);
// }


//to make cleaner take the event in
//have to make the event "click" the target

// var logText = function(event) {
//
//   console.log(event.target.textContent);
//
// }
//
// var logParent = function (event) {
//   console.log('this is the parent: ' + event.target.tagName);
// }
// to pass this event into parent for one event listener no matter how many boxes

var logParent = function (event) {

  console.log(event.target.textContent);

}



parent.addEventListener('click', logParent);

//for pressing keydown instead of click

// var logParent = function (event) {
//   console.log(event.target.textContent);
//   console.log(event.currentTarget.textContent);
//
// }
//
// var childFunc = function (event) {
//   console.log('target: ' + event.target.tagName);
//   console.log('current target: ' + event.currentTarget.tagName);
//
// }
// input.addEventListener('keydown', logParent);
//
// parent.addEventListener('keydown', logParent);



//the way a fuction is logged is through the event listener which in this case is the child
//after wrapping everything in the parent we can then eliminate individual listener

// div1.addEventListener('click', logText);
//
// div2.addEventListener('click', logText);

//after updating logText pass extra events-we dont need this
// div.addEventListener('click', function() {
//   logText(event, amount)
// })
