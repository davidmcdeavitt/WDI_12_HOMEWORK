
var num1input = document.querySelector('#num1');
var num2input = document.querySelector('#num2');
var span = document.querySelector('span');
var btn = document.querySelector('button');


btn.addEventListener('click', function() {
  var num1 = Number(num1input.value);
  var num2 = Number(num2input.value);
  var result = num1 + num2;
  span.textContent = result;

})
