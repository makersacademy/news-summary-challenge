var runner = {
  runTests: function(unit) {
    Object.keys(unit).forEach(function(test) {
      try {
        unit[test]();
      }
      catch(error) {
        console.error(error)
      }
    });
  }
}
