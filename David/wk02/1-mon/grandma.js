var year = function(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
function grannyTalk(phrase){
  if (phrase.toLowerCase() === "bye") {
    console.log("What's that honey, I didn't hear you..");
  } else if(phrase === phrase.toUpperCase()) {
    console.log("NO, NOT SINCE " + year(1930,1950));
  } else {
    console.log("SPEAK UP SONNY JIM");
  }
}
