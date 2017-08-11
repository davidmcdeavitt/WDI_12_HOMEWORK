'use strict';

var ALLERGIES = function(number){
    this.allergyList = [
      "cats" = 128,
      "pollen" = 64,
      "chocolate" = 32,
      "tomatoes" = 16,
      "strawberries" = 8,
      "shellfish" = 4,
      "peanuts" = 2,
      "eggs" = 1
  ];
    this.number = number;
    this.allergyList = () => {
      return Object.keys(ALLERGIES).reduce((firstAllergy,SecondAlergy) => {
        SecondAlergy & number ? firstAllergy.push(ALLERGIES[firstAllergy]) : firstAllergy;
        return firstAllergy;
      },
  };
  this.matchAllergy = (allergy) => {
    return this.list().indexOf(allergy) >= 0;
  };

  return this;
}
}
