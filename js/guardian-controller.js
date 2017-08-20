(function(exports) {
  var newsSummaryAPI = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl="
  var politicsHeadlinesURL = "http://content.guardianapis.com/politics"

  function GuardianController(windowObject,
                              element,
                              articleCollection,
                              headlineView,
                              headlineParser,
                              request) {
    this.windowObject = windowObject;
    this.element = element;
    this.articleCollection = articleCollection;
    this.headlineView = headlineView;
    this.headlineParser = headlineParser;
    this.request = request;
  }

  GuardianController.prototype = {
    makeAPIRequest: function() {
      this.request.open("GET", newsSummaryAPI + politicsHeadlinesURL);
      this.request.send();
    },
    fakeAPIRequest: function() {
      fakeResponse = this.headlineParser.extractArticles(JSON.stringify(exampleResponse))
      var headlines = this.headlineView.returnHTML(fakeResponse);
      this.element.innerHTML = headlines;
    },
    setupAPIListener: function() {
      var self = this;
      this.request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          var articles = self.headlineParser.extractArticles(this.response);
          self.updateElement(self.headlineView.returnHTML(articles));
        }
      }
    },
    setupHashListener: function() {
      var self = this;
      this.windowObject.addEventListener("hashchange", function(event) {
        if(!location.hash.includes("#")) {
          var HTMLString = self.headlineView.returnHTML(self.articleCollection.articles());
          self.updateElement(HTMLString);
        }
      });
    },
    updateElement: function(content) {
      this.element.innerHTML = content;
    }
  }

  exports.GuardianController = GuardianController;
})(this);
