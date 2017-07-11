var str = document.querySelector('#word');
var span = document.querySelector('span');
var btn = document.querySelector('button');

btn.addEventListener('click',function(str) {
  var result = str.split(" ").join("-").toLowerCase();
  span.textContent = result;
});
