
// flipFrame1 =coin.style.transfor = scaleX(0.7) fakes a flip of coin
// varflipAmimate = function() {window.setTimeout(flipFrame1, 100);
// same but (flipFrame2, 200)} etc
coinFlip = function() {
  return math.floor((math.random() * 2) + 1);
  }
//
// el = document.getElementById('info');
// el.innerHtml = '<h2>random number</h2><p>' + coinFlip + '<p>'


whichSide = function(coinFlip) {
  if ('1') {
    document.getElementById('headsTails').src = 'http://www.marshu.com/articles/images-website/articles/presidents-on-coins/quarter-coin-head.jpg'
  }else {
    document.getElementById('headsTails').src = 'https://images-na.ssl-images-amazon.com/images/I/51NyMaKLydL.jpg'
  }
}
