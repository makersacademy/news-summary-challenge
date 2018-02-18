(function(global) {
  function TodaysNews() {
    this._articles = [];
  }

  TodaysNews.prototype = {
    constructor: TodaysNews,
    articles: function() {
      return this._articles;
    },
    run: function(apikey = MY_KEY, newsSource = 'the-economist') {
      var newRequest = new XMLHttpRequest();
      newRequest.open("GET", `https://newsapi.org/v2/top-headlines?sources=${newsSource}&apiKey=${apikey}`, false)
      newRequest.send();
      var response = newRequest.response
      var jsonResponse = JSON.parse(response);
      this._articles = jsonResponse.articles;
    }
  };


  global.TodaysNews = TodaysNews;
})(this);
