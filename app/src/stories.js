(function(exports) {
  function Stories(xhrBuilder) {
    this.articles = [];
  };

  Stories.prototype.addArticles = function(stories) {
    for (i = 0; i < stories.length; i++) {
      this.articles.push(stories[i]);
    }
  };

  Stories.prototype.getHeadlines = function(builder) {
    var storiesList = this;
    var stories = builder.buildRequest();
    stories.open('GET', builder.url + builder.apiKey, builder.isAsynchronous);
    stories.onload = function() {
      var storiesData = JSON.parse(stories.responseText);
      storiesList.addArticles(storiesData.response.results);
    }
    stories.send();
  };

  exports.Stories = Stories;
})(this);


function XhrBuilder(url, apiKey, isAsynchronous) {
  var builder = this;
  builder.url = url;
  builder.apiKey = apiKey;
  builder.isAsynchronous = isAsynchronous;

  function buildRequest() {
    this.url = builder.url;
    this.apiKey = builder.apiKey;
    this.isAsynchronous = builder.isAsynchronous;
    return new XMLHttpRequest();
  }

  return {
    buildRequest: buildRequest
  }
}
