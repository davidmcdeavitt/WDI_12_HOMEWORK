var btn = document.querySelector('button');
var title = document.querySelector('.text');
var returnArea = document.querySelector('textarea');

btn.addEventListener('click', function(event){
  event.preventDefault();

  console.log('search movie with ajax');

  var settings = {
    url: 'http://omdbapi.com/?t=' + title + '&apikey=' + omdbApi
  };


    jQuery.ajax(settings).done(function(response){
      console.log(response.Title);
  });
  console.log('after ajax function call');
});
