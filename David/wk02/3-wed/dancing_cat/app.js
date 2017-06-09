
  var movePixels = 10;
  var intervalId;


  var img = document.querySelector('img');

  // var catWalk = function() {
  //   var currentLeft = parseInt(img.style.left);
  //   img.style.left = (currentLeft + movePixels) + 'px';
  //
  //   if (currentLeft > (window.innerWidth-img.width)) {
  //     img.style.left = '0px';
  //   }
  // }
// var img = document.getElementsByTagName('img')[0];
// img.style.left = '0px';



//to clear number
// var reverseTime = function() {
//   clearInterval(TimerId)
//   TimerId = (walking, 100)
//   var start =("buttom" +'click')
// }
// var reverseWalk = reverse.parseInt(img.style.left);
//use setTimeout to write function for this
var catWalk = function() {

  var currentLeft = parseInt(img.style.left);
  img.style.left = (currentLeft + movePixels) + 'px';
  var currentReft = parseInt(img.style.right);
  img.style.right = (currentRight + movePixels) + 'px';

  if (currentLeft > (window.innerWidth-img.width)) {
    img.style.left = '0px';
} else if(currentRight < (window.innerWidth-img.width)) {
    img.style.right = '0px';
}
}

var startButton = document.querySelector('#start');
startButton.addEventListener('click', function() {


  // if (walkForwards && (currentLeft > (window.innerWidth-img.width))) {
  //   walkForwards = false;
  // }
  // if (!walkForwards && (currentLeft <= 0)) {
  //   walkForwards = true;
  // }
  // if (walkForwards) {
  //   img.style.left = (currentLeft + 10) + 'px';
  // } else {
  //   img.style.left = (currentLeft - 10) + 'px';
  // }


  intervalId = window.setInterval(catWalk, 80);
  console.log(intervalId);
})
var fastButton = document.querySelector('#faster');
fastButton.addEventListener('click', function() {
  intervalId = window.setInterval(catWalk, 200);
  console.log(intervalId);
  })

var stopButton = document.querySelector('#stop');
stopButton.addEventListener('click', function () {
  clearInterval(intervalId);
});
// var raveButton = document.querySelector('#rave');
// raveButton.addEventListener('click', function () {
