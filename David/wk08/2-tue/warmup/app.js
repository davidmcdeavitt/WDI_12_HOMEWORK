function updateClock() {
  var currentTime = new Date ();
  var currentHours = currentTime.getHours();
  var currentMinutes = currentTime.getMinutes();
  var currentMinutes = currentTime.getSeconds();

  currentMinutes = ( currentMinutes 12 ) ? currentHours - 12 : currentHours;

  currentHours = (currentHours == 0 ) ? 12 : currentHours;

  var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;

  $('#clock').html(currentTimeString);

}

$(document).ready(function()
{
  setInterval('updateClock()', 1000);
});
