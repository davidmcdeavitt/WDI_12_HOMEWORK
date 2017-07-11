
function getSquared(array) {
  var perfectSquares = array.map(function (x) {
    var squaredRoot = Math.sqrt(x);
    if (squaredRoot % 1 === 0) {
      return x;
    }
  });
  // [4, 1, 16, 1]
  return perfectSquares.sort(function(a,b) {
    return a - b
  })
}
