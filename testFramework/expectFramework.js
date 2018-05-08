console.log("expectFramework.js loaded.");

function expect(x) {
  return {
    toEqual: function(y){
      if (x === y) {
        console.log("    %c Passed! " + x + " is equal to " + y + ".", 'color: green');
      }
      else{
        console.log("    %c Failed! " + x + " is not equal to "+ y + ".", 'color: red');
      };
    }
  };
};
