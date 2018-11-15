(function(exports) {

  var beforeFunctions = [];
  

  function describe(description, callback) {
    console.log(description);
    callback();
    beforeFunctions = [];
  }

  function it(description, callback) {
    beforeFunctions.forEach((callback) => { callback.call(); });
    console.log(description);
    callback();
  }

  function beforeEach(callback) {
    beforeFunctions.push(callback);
  }

  function expect(expression1) {
    return {
      toBe: function(expression2){
        if (expression1 === expression2) {
          console.log("  :)");
          return true;
        } else {
          console.log(`  Error: expected "${expression1}" to equal "${expression2}"`);
          return false;
        }
      },
      toInclude: function(element) {
        try {
          expression1.includes(element);
        }
        catch(err) {
          console.log(` Error: ${expression1} does not have an include() method`);
          return false;
        }
        if (expression1.includes(element)) {
          console.log("  :)");
          return true;
        } else {
          console.log(`  Error: expected "${expression1}" to include "${element}"`);
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
})(this);
