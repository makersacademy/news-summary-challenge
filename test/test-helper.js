var assert = {
  isTrue: function(testObject, expectation) {
    if (testObject !== expectation) {
      var errorText = ("Assertion failed: " + testObject + " is not equal to " + expectation);
      document.getElementById('description').insertAdjacentHTML('beforeend', ` We expected ${testObject} to equal ${expectation} - Failed ${errorText} <br /> <br />`)
      throw new Error(errorText);
    } else {
      document.getElementById('description').insertAdjacentHTML('beforeend', ' Passed <br /> <br/>')
    }
  },

  notTrue: function(testObject, expectation) {
    if (testObject === expectation) {
      var errorText = ("Assertion failed: " + testObject + " is equal to " + expectation);
      document.getElementById('description').insertAdjacentHTML('beforeend', ` We expected ${testObject} not to equal ${expectation} - Failed ${errorText} <br /> <br />`)
      throw new Error(errorText);
    } else {
      document.getElementById('description').insertAdjacentHTML('beforeend', ' Passed <br /> <br/>')
    }
  },

  contains: function(testObject, expectation) {
    if (!testObject.includes(expectation)) {
      var errorText = ("Assertion failed: " + testObject + " includes " + expectation);
      document.getElementById('description').insertAdjacentHTML('beforeend', ` We expected ${testObject} to include ${expectation} - Failed ${errorText} <br /> <br />`)
      throw new Error(errorText);
    } else {
      document.getElementById('description').insertAdjacentHTML('beforeend', ' Passed <br /> <br/>')
    }
  },

  isInstanceOf: function(testObject, expectation) {
    if (testObject.constructor !== expectation) {
      var errorText = ("Assertion failed: " + testObject + " is not an instance " + expectation);
      document.getElementById('description').insertAdjacentHTML('beforeend', ` We expected ${testObject} to be an instance of ${expectation} - Failed ${errorText} <br /> <br />`)
      throw new Error(errorText);
    } else {
      document.getElementById('description').insertAdjacentHTML('beforeend', ' Passed <br /> <br/>')
    }
  },

};

 function describe(description){
   document.getElementById('description').insertAdjacentHTML('beforeend', `${description} <br /> <br/>`)
 };

 function it(description){
   document.getElementById('description').insertAdjacentHTML('beforeend', `____${description}`)
 }
