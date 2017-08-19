(function(exports) {
  var test = {
    describe: function(description, blockFunction) {
      console.log(description);
      blockFunction();
    },

    it: function(description, testFunction) {
      try{
        testFunction();
        showPassingTest(description);
      }
      catch(err){
        showFailingTest(description, err);
      }
    }
  };

  function showPassingTest(description) {
    console.log("✅", description);
  }

  function showFailingTest(description, err) {
    console.log("❌", description);
    console.log("  ", err.message);
    console.log("  ", err.stack);
  }

  exports.test = test;
})(this);
