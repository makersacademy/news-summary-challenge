(function(exports) {
  var politicsHeadlinesURL = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics"
  function GuardianAPICaller(requester) {
    this.requester = requester;
    console.log(requester);
  };

  GuardianAPICaller.prototype = {
    setupAPIListener: function() {
      var self = this;
      this.requester.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          console.log('state has changed');
          console.log(this.responseText);
          self.results = this.responseText;
        }
      }
    },
    makeAPIRequest: function() {
      console.log('i have arrived');
      this.requester.open("GET", politicsHeadlinesURL);
      this.requester.send();
    }
  };
  exports.GuardianAPICaller = GuardianAPICaller;
})(this);
