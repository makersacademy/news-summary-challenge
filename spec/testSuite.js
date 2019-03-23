var assert = {

  isTrue: function(thingToCheck) {

    if(thingToCheck) {
      console.log('PASS: ' + thingToCheck + ' evaluates to true.');
    } else {
      console.log('FAIL:: ' + thingToCheck + ' does not evaluate to true.');
    }

  },

  areEqual: function(firstThing, secondThing) {

    if(firstThing == secondThing) {
      console.log('PASS: "' + firstThing + '" is equal to "' + secondThing + '"');
    } else {
      console.log('FAIL: "' + firstThing + '" is not equal to "' + secondThing + '"');
    }

  },

  containsText: function(needle, haystack) {

    if(haystack.search(needle)) {
      console.log('PASS: "' + needle + '" is present in "' + haystack + '"');
    } else {
      console.log('FAIL: "' + needle + '" is not present in "' + haystack + '"');
    }
  },

  arrayIncludes: function(haystack, needle) {
    if(haystack.includes(needle)) {
    console.log(`PASS: ${needle} is inside ${haystack}`);
    } else {
      console.log(`FAIL: ${needle} is not present in ${haystack}. This is a fail.`);
    }

  },

  isTypeOf: function(variableToCheck, typeExpected) {
    if(typeof variableToCheck === typeExpected) {
      console.log(`PASS: ${variableToCheck} is a ${typeExpected}`);
    } else {
      console.log(`FAIL: ${variableToCheck} is not a ${typeExpected}`);
    }
  },

  areNotEqual: function(firstThing, secondThing) {
    if(firstThing != secondThing) {
      console.log(`PASS: ${firstThing} is not equal to ${secondThing}`);
    } else {
      console.log(`FAIL: ${firstThing} is equal to ${secondThing}`);
    }
  }

}