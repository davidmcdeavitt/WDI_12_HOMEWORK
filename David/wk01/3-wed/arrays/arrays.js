// console.log("Arrays!");
//
// var recipe = {
//   'title': 'mole',
//   'servings': '2',
//   'ingredients': ['cinnamon', 'cumin', 'cocoa']
// };
// console.log(recipe.title);
// console.log('Servings: ' + recipe.servings);
// console.log('ingredients:');
// for (i = 0; i < recipe.ingredients.length; i++) {
//   console.log(recipe.ingredients[i]);
// }
// ANSWER
//consol.log(recipe.ingredients).
    // console.log(recipe.ingredients.toString())
    // console.log(recipe.ingredients.join('/n'))





// var books = [{
//   'title': 'Freedom Riders',
//   'author': 'some guy',
//   Read : false
// },
// {
//   'title': 'Born Free',
//   'author': 'me',
//   Read : true
// }];
////
// for (var i = 0; i < books.length; i++) {
//   var book = books[i];
//   var bookInfo = book.title + '" by ' + book.author;
//   if (book.Read) {
//     console.log('You already read "' + bookInfo);
//   } else {
//     console.log('You still need to read "' + bookInfo);
//   }
// }
//ANSWER
// for (var i = 0; i < books.length; i++) {
// var currBook = books[i];
// if (currBook.Read) {
//   console.log('already read' + currBook.title + ' by ' + currBook.author);
//
// }else {
//   console.log('you should read ' + currBook.title);
// }
// }






var movie = {
  'title': 'Pirates of the Caribbean',
  'duration': 120,
  'stars': ['Johnny Depp', 'Orlando Bloom', 'Kira Knightly']
};
  var describeMovie = function(film) {
    console.log(movie.title + 'last for ' + movie.duration + ' stars ' + movie.stars.join(', '));
  }
  var result = describeMovie
console.log( describeMovie(movie) );
