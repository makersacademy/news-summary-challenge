var it = function(text, callback){
  console.log(text);
  callback();
};

var expect = function(testedInput){
  return {
    toEqual: function(expectedOutcome) {
      if(testedInput === expectedOutcome) {
        console.log("Tests Passing You Rock")
      } else {
        console.log("You're benched, mate.")
      }
    },

    toNotEqual: function(expectedOutcome) {
      if(testedInput !== expectedOutcome) {
        console.log("Tests Passing You Rock")
      } else {
        console.log("You're benched, mate.")
      }
    },

  };
};
