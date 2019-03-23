(function(exports){
  var describe = function(string, callback){
    document.write("<h3>" + string + "</h3><br>")
    callback()
  }

  var it = function(string, callback){
    try {
      callback()
      document.write(("<div style= 'color: green'> :) " + string + "</div>" + "<br>" + "<br>"))
    } catch(e) {
      document.write(( "<div style= 'color: red'> :( " + string + "<br>" + e + "<br>" + e.stack + "</div>" + "<br>"))
    }
  }

  var assert = {
    isEqual: function(testObj, expectedResult) {
        if (!(testObj === expectedResult)) {
            throw new Error("Expected: " + expectedResult + " ...But got: " + testObj )
        }
    },
    isEmpty: function(arr) {
      if (arr.length > 0) {
        throw new Error(arr + " is not empty")
      }
    },
    contains: function(arr, expectedResult) {
      if (!arr.includes(expectedResult)){
        throw new Error(arr + "Does not include: " + expectedResult)
      }
    }
  }

  exports.describe = describe
  exports.it = it
  exports.assert = assert

})(this)
