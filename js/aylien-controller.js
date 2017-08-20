(function(exports) {
  var aylienAPI = "http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url="

  function AylienController(windowObject, element, articleCollection, articleView, requester) {
    this.windowObject = windowObject;
    this.element = element;
    this.articleCollection = articleCollection;
    this.articleView = articleView;
    this.requester = requester;
  }

  AylienController.prototype = {
    setupHashListener: function() {
      var self = this;
      this.windowObject.addEventListener("hashchange", function(event) {
        if(!location.hash.includes("articles")) { return; }
        var article = self.articleCollection.getArticleById(self.getArticleId());
        self.prepareAPICall(article);
        // self.fakeAPICall(article);
      })
    },
    getArticleId: function() {
      return location.hash.split("/")[2];
    },
    prepareAPICall: function(article) {
      if(article.summary()) {
        this.updateElement(this.articleView.returnHTML(article));
      } else { this.sendAPICall(article); }
    },
    sendAPICall: function(article) {
      this.currentRequest = new this.requester()
      this.setupAPIListener(article);
      this.currentRequest.open("GET", aylienAPI + article.url());
      this.currentRequest.send()
    },
    fakeAPICall: function() {
      var article = this.articleCollection.articles()[2];
      this.articleCollection.articles()[2].addSummary(exampleAylienResponse.text);
      this.updateElement(this.articleView.returnHTML(article));
    },
    setupAPIListener: function(article) {
      var self = this;
      this.currentRequest.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          var response = JSON.parse(this.response);
          article.addSummary(response.text);
          self.updateElement(self.articleView.returnHTML(article))
        }
      }
    },
    updateElement: function(content) {
      this.element.innerHTML = content;
    }
  }

  exports.AylienController = AylienController;
})(this);
