var assert = {
  isTrue: function(assertionToCheck) {
      if(!assertionToCheck) {
        return("Assertion failed: " + assertionToCheck + " is not truthy");
      } else {
        return ("Assertion passed: " + assertionToCheck + " is truthy")
      }
  },
  isEqual: function(one, two) {
    if(!(one === two)) {
      return(`Assertion failed: ${one} is not equal to ${two}`);
    } else {
      return(`Assertion passed: ${one} is equal to ${two}`)
    }
  },
  isInstanceOf: function(object, objectType) {
    if(!object instanceof objectType) {
      return(`Assertion failed: ${object.constructor.name} is not a type of ${objectType.name}`);
    } else {
      return(`Assertion passed: Object is a type of ${objectType.name}`)
    }
  },
  arrayIncludes: function(array, value) {
    if(!array.includes(value)) {
      return(`Assertion failed: ${array} does not include ${value}`)
    } else {
      return(`Assertion passed: ${array} includes ${value}`)
    }
  }
};
