(function(exports) {
  function Stories(xhrBuilder) {
    this.articles = [];
  };

  Stories.prototype.addArticles = function(stories) {
    for (i = 0; i < stories.length; i++) {
      this.articles.push(stories[i]);
    }
  };

  Stories.prototype.getHeadlines = function(url, apiKey, isAsynchronous) {
    var storiesList = this;
    var stories = xhrBuilder.buildRequest()
    stories.open('GET', url + apiKey, isAsynchronous);
    stories.onload = function() {
      var storiesData = JSON.parse(stories.responseText);
      storiesList.addArticles(storiesData.response.results);
      console.log(storiesList.articles);
    }
    stories.send();
  };

  exports.Stories = Stories;
})(this);


function XhrBuilder() {

  function buildRequest() {
    return new XMLHttpRequest();
  }

  return {
    buildRequest: buildRequest
  }
}

var xhrBuilder = new XhrBuilder();
console.log(xhrBuilder);
