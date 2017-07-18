
var btn = document.querySelector('button');

btn.addEventListener('click', function(event) {

  event.preventDefault();


  var movieName = document.querySelector('input').value;

  var settings = {
    url: 'http://omdbapi.com/',
    data: {
      s: movieName,
      apikey: '2f6435d9'
    }
  }


  var showMovie = function() {

  }

    $.ajax(settings).done(function(movie) {

    var movieObjects = movie.Search;
    movieObjects.forEach(function(entry){
      var newHeader = document.createElement('h2');
      newHeader.textContent = entry.Title;
      document.querySelector('.response').appendChild( newHeader );
    });

  });
});
