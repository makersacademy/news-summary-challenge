(function(exports) {
  var test = {
    describe: function(description, blockFunction) {
      console.log(description);
      blockFunction();
    },

    it: function(description, testFunction) {
      try {
        testFunction();
        showPassingTest(description);
      } catch(exception) {
        showFailingTest(description, exception);
      }
    }
  };

  function showPassingTest(description) {
    console.log("✅ ", description);
  }

  function showFailingTest(description, exception) {
    console.log("❌ ", description);
    console.log("  ", exception.message);
    console.log("  ", exception.stack);
  }

  exports.test = test;
})(this);
