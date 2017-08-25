(function(exports) {
  var urlRequest = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics?show-fields=all";

  function GuardianController(windowObject, element, articleList, headlineView, headlineParser, request) {
    this.windowObject = windowObject;
    this.element = element;
    this.articleList = articleList;
    this.headlineView = headlineView;
    this.headlineParser = headlineParser;
    this.request = request;
  }

  GuardianController.prototype = {
    updateElement: function(content) {
      this.element.innerHTML = content;
    },

    APIRequest: function() {
      this.request.open("GET", urlRequest);
      this.request.send();
    },

    APIListener: function() {
      var self = this;
      this.request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          var articles = self.headlineParser.extractArticle(this.response);
          self.updateElement(self.headlineView.returnHTML(articles));
        }
      };
    },

    HashListener: function() {
      var self = this;
      this.windowObject.addEventListener("hashchange", function(event) {
        if(!location.hash.includes("#")) {
          var HTMLString = self.headlineView.returnHTML(self.articleList.articles());
          self.updateElement(HTMLString);
        }
      });
    },
  };
  exports.GuardianController = GuardianController;
})(this);
