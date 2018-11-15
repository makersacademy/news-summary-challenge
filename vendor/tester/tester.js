(function(exports) {

  var beforeFunctions = [];

  var padding = "";

  function describe(description, callback) {
    padding += "  ";
    console.log(padding + description);
    callback();
    beforeFunctions = [];
    padding = padding.substring(2);
  }

  function it(description, callback) {
    padding += "  ";
    beforeFunctions.forEach((callback) => { callback.call(); });
    console.log(padding + description);
    callback();
    padding = padding.substring(2);
  }

  function beforeEach(callback) {
    beforeFunctions.push(callback);
  }

  function expect(expression1) {
    return {
      toBe: function(expression2){
        if (expression1 === expression2) {
          console.log(padding + "%c  :)", "color: green");
          return true;
        } else {
          console.log(padding+`%c  Error: expected "${expression1}" to equal "${expression2}"`, "color: red");
          return false;
        }
      },
      toInclude: function(element) {
        try {
          expression1.includes(element);
        }
        catch(err) {
          console.log(padding+`%c  Error: ${expression1} does not have an include() method`, "color: red");
          return false;
        }
        if (expression1.includes(element)) {
          console.log(padding + "%c  :)", "color: green");
          return true;
        } else {
          console.log(padding+`%c  Error: expected "${expression1}" to include "${element}"`, "color: red");
          return false;
        }
      }
    };
  }
  exports.describe = describe;
  exports.it = it;
  exports.expect = expect;
  exports.beforeFunctions = beforeFunctions;
  exports.beforeEach = beforeEach;
  exports.padding = padding;
})(this);
