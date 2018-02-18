var assert =  {

    isEqual: function(actual, expected) {
    if(actual !== expected) {
      throw {type: "Fail", details: {actual: actual, expected: expected}};
    } else {
      console.log("Success", {type: "Test passed", details: {actual: actual, expected: expected}});
    }
  },

    isNotEqual: function (actual, expected) {
      if(actual === expected) {
        throw {type: "Fail", details: {actual: actual, expected: expected}};
      } else {
        console.log("Success", {type: "Test passed", details: {actual: actual, expected: expected}});
      }
    },

    toContain: function (actual, expected) {
      if (actual.includes(expected.toLowerCase())) {
        console.log("Success", {type: "Test passed", details: {actual: actual, expected: expected}});
      } else {
        throw {type: "Fail", details: {actual: actual, expected: expected}};
      }
    },

    arrayContain: function (actual, expected){
      actual.forEach(function(element) {
        if(element === expected){
          console.log("Success", {type: "Test passed", details: {element: element, expected: expected}});
        } else {
          throw {type: "Fail", details: {element: element, expected: expected}};
        }
      });
    }
};

//-----> describe block <-------
var describe = function(messageOuter, it) {
  console.log(messageOuter);
  it();
};


//----->  it block <-------
var it = function (messageInner, testFunc) {
  try {
    testFunc();
    console.log('%c' + messageInner, 'color: green');

  } catch(err) {
    console.error("Failure", err);
    console.log('%c' + messageInner, 'color: red');
  }
};
