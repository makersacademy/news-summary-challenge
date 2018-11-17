
(function(exports) {
  function expect(value) {

    function isEqual(assertion) {
      if (value === assertion) {
        console.log("Passed")	}
        else { console.log("Failed")}
    }

    function haveContent(assertion) {
      if (value.includes(assertion)) { console.log("Passed")
        }else { cosole.log("Failed")}
    }

    return {
      isEqual: isEqual,
      haveContent: haveContent
    }

  }
  exports.expect = expect

})(this);
