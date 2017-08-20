(function(exports) {
  var politicsHeadlinesURL = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics"

  function GuardianController(element, articleCollection, headlineView, headlineParser, request) {
    this.element = element;
    this.articleCollection = articleCollection;
    this.headlineView = headlineView;
    this.headlineParser = headlineParser;
    this.request = request;
  }

  GuardianController.prototype = {
    makeAPIRequest: function() {
      this.request.open("GET", politicsHeadlinesURL);
      this.request.send();
    },
    fakeAPIRequest: function() {
      var headlines = this.headlineView.returnHTML(exampleResponse);
      console.log(exampleResponse.response)
      this.element.innerHTML = headlines;
    },
    setupAPIListener: function() {
      var self = this;
      this.request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          var response = JSON.parse(this.response);
          var headlines = self.headlineView.returnHTML(response);
          self.element.innerHTML = headlines;
        }
      }
    },
  }

  exports.GuardianController = GuardianController;
})(this);
