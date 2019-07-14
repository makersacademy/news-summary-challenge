(function(exports) {

  function displayText(arg) {
    this._URL = 'http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=' + arg
  }

  displayText.prototype = {

    full: function() {
      
    },

    summary: function(arg) {

    }

  }

  exports.displayText = displayText
})(this);