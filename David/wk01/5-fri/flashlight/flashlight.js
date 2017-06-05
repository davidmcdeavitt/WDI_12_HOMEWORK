// document.getElementsByTagName('button')
// var btn = document.getElementsByTagName('button')[0]
// document.body.style.background = "white";
var body = document.body;
document.body.style.backgroundColor = "white";
var changeColor = function() {
  // var backgroundcolor = document.getElementsByClassName('className')
  if (document.body.style.backgroundColor === "white") {
    document.body.style.backgroundColor = "black"; }
  else if (document.body.style.backgroundColor === "black") {
    document.body.style.backgroundColor = "white";
}

}
body.addEventListener('click', changeColor );
