var train = {
  Alamein: ["Flinders Street", "Richmond", "East Richmond", "Burnley", "Hawthorn", "Glenferrie"],
  GlenWaverly: ["Flagstaff", "Melbourne Central", "Parliament", "Richmond", "Kooyong", "Tooronga"],
  Sandringham: ["Southern Cross", "Richmond", "South Yarra", "Prahran", "Windsor"]
};


var getThere = function(currentLocation, destination, linesObject) {




var destination = function(stopName) {
prompt("Where are you heading today?");
  if (stopName = train[1]) {
    console.log();
  }else if (stopName = train[2]) {
    console.log();
  }else if (stopName = train[3]) {
    console.log();
  }else {
    console.log("Choose valid destination.");
  }
}


var currentLocation = function(stopName) {
prompt("What station are you at currently");
  if (stopName = train[1]) {
    console.log(
  }else if (destination = train[2]) {
    console.log(
  }else if (desination = train[3]) {
    console.log();
  }else {
    console.log("Choose valid start point.");
  }
}

var returnObj       = {};
returnObj.start     = currentLocation;
returnObj.end       = destination;
var startingPoint   = finder(currentLocation);
var endingPoint     = finder(destination);

// how to get to Richmond from startpoint
function reference(stopName) {
  var stationIndex = 0;
  var lineName = '';

  for (line in linesObject) {
    if (linesObject[line].indexOf(stopName) !== -1) {
      indexOfStation = linesObject[line].indexOf(stopName);
      lineName = line;
    }
  }return [indexOfStation, lineName]

}
function midpoint(array) {
  var Stations            = object.train[i];
  var lineName            = object.train[i];
  var getToRichmond       = linesObject[lineName].indexOf("Richmond");
  var temp                = linesObject[lineName].slice();
  returnObj.getToRichmond = lineName;

  if (getToRichmond > Stations) {
    temp = temp.splice(Stations, getToRichmond + 1);
    return temp;
  } else {
    temp = temp.splice(getToRichmond, Stations);
    return temp.reverse();
  }
};
}
function lastBit(array) {
  var GetBack             = object.train[i];
  var lineName            = object.train[i];
  var getToDest           = linesObject[lineName].indexOf("Richmond");
  var temp                = linesObject[lineName].slice();
  returnObj.getToRichmond = lineName;

  if (getToDest > GetBack) {
    temp = temp.splice(GetBack, getToDest + 1);
    return temp;
  } else {
    temp = temp.splice(getToDest, GetBack);
    return temp.reverse();
  }
};
}
function getToRichmond() {
  var endStation          = finder(endStation);
  var begStation          = finder(startingPoint);

  if (endStation[1] === begStation[1]) {
    var line = linesObject[begStation[1]].slice();
    returnObj.getToRichmond = endStation[1];
    if (endStation[0] < begStation[0]) {
      returnObj.lastBit = line.splice(endStation[0], begStation[0]).reverse();
      return returnObj;
    }
  }
    return false;
  }
};


//
//
//
// var getThere = function(currentLocation, crossover, destination) {
//   if (currentLocation > crossover){
//     console.log(runForward)
//   }
//   else if (currentLocation < crossover) {
//     console.log(runReverse);
//   }
// }
