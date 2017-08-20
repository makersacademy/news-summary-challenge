(function(exports) {
  var assert = {
    isTrue: function(assertionToCheck) {
      if (!assertionToCheck) {
        document.getElementById("tests").innerHTML += ("  <b><ul>🙄 <span style='color:red;'> ASSERTION FAILED: " + assertionToCheck + " is not truthy<br> TRY AGAIN...</span></ul></b>");
      } else {
        document.getElementById("tests").innerHTML += (" <b><ul>👩‍⚕️<span style='color:green;'>  The test has passed, you are amazing!</span></ul></b>");
      }
    }
  };
  var describe = function(description, test) {
      document.getElementById("tests").innerHTML += "<br></br><b><span style='font-size:20px;'>" + description + ":</span></b>";
      test();
  };

  var it = function(description, test) {
    document.getElementById("tests").innerHTML += "<br>&nbsp;&nbsp; - " + description;

    test();
  };

  exports.assert = assert;
  exports.describe = describe;
  exports.it = it;
})(this);
