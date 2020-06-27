var expect = {
    isTrue: function(expectationToCheck) {
       if (!expectationToCheck) {
         throw new Error(
             "Expectation failed: " + expectationToCheck + "🤦‍♂️🤦‍♀️!"
         );
       } else {
           console.log("Yay, you got it BABY! 💪✅")
       }
    }
}