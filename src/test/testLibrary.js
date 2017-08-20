(function(exports) {
  var assert = {
    isTrue: function(assertion) {
      if (!assertion) {
        document.getElementById("tests").innerHTML += ("  <b><ul>🙄 <span style='color:red;'> ASSERTION FAILED: " + assertion + " is not truthy<br> TRY AGAIN...</span></ul></b>");
      } else {
        document.getElementById("tests").innerHTML += (" <b><ul>👩‍⚕️<span style='color:green;'>  The test has passed, you are amazing!</span></ul></b>");
      }
    }
    isFalse: function(assertion) {
      if (assertion) {
        document.getElementById("tests").innerHTML += ("  <b><ul>🙄 <span style='color:red;'> ASSERTION FAILED: Expected " + assertion + " to be falsey<br> TRY AGAIN...</span></ul></b>");
      } else {
        document.getElementById("tests").innerHTML += (" <b><ul>👩‍⚕️<span style='color:green;'>TEST PASSED. " + assertion + " is false</span></ul></b>");
      }
    }
    isEqual: function(test, expectation) {
      if (test !== expectation) {
        document.getElementById("tests").innerHTML += ("  <b><ul>🙄 <span style='color:red;'> ASSERTION FAILED: Expected " + test + " to be equal to " + expectation + "<br> TRY AGAIN...</span></ul></b>");
      } else {
        document.getElementById("tests").innerHTML += (" <b><ul>👩‍⚕️<span style='color:green;'>TEST PASSED. " + test + " is equal to " + expectation "</span></ul></b>");
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
