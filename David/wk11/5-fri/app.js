'use strict';

class ALLERGIES {

  "128": "cats",
  "64": "pollen",
  "32": "chocolate",
  "16": "tomatoes",
  "8": "strawberries",
  "4": "shellfish",
  "2": "peanuts",
  "1": "eggs"

};


module.export = funtion(number) {
  this.number = number;
  this.list = () => {
      return Object.keys(ALLERGIES).reduce((firstAllergy,SecondAlergy) => {
        SecondAlergy & number ? firstAllergy.push(ALLERGIES[firstAllergy]) : firstAllergy;
        return firstAllergy;
      },
  };
  this.AllergyList = (allergy) => {
    return this.list().indexOf(allergy) >= 0;
  };

  return this;
}
