(function(exports) {
    var assert = {
      isTrue: function(assertionToCheck) {
        if (!assertionToCheck) {
          throw new Error();
        }
      },
      isFalse: function(assertionToCheck) {
        if (assertionToCheck) {
          throw new Error();
        }
      }
    };
  
    function dillscribe(desc, fn) {
      console.log(desc);
      fn();
    };
  
    function it(desc, fn) {
     try {
       fn();
       console.log("\u2714 " + desc);
     } catch (error) {
       console.log("\u2718 " + desc);
       console.error(error);
     }
    }
    
    exports.dillscribe = dillscribe;
    exports.it = it;
    exports.assert = assert;
  })(this);