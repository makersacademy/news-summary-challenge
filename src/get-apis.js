(function(exports) {
  function GetAPIs () {
    this.articleList = new ArticleList();
  }

  GetAPIs.prototype.headlinesAPI = function(callback) {
    fetch('https://content.guardianapis.com/search?api-key=b5a397fe-7a8b-47c4-9727-abc75851d690')
      .then(function(response) {
        return response.json();
      })
      .then(myJson => {
        callback(myJson);
      });
    };

  GetAPIs.prototype.getHeadlines = function() {
    this.headlinesAPI(myJson => {
      var results = myJson.response.results;
      for (var i = 0; i < results.length; i++) {
        this.articleList.create(results[i].webTitle, results[i].webUrl);
      }
    });
    return this.articleList;
  };

  GetAPIs.prototype.summaryAPI = function(article) {
    this.article = article;
    fetch("https://cors-anywhere.herokuapp.com/https://api.aylien.com/api/v1/summarize?url=" + this.article.webURL, {
      headers: {
        'X-AYLIEN-TextAPI-Application-Key': '5a4aaf7d044f737bfbe716c2d5cb5749',
        'X-AYLIEN-TextAPI-Application-ID': '687d69ca'
      }
    })
    .then(function(response) {
      return response.json();
    })
    .then(myJson => {
      this.article.createSummary(myJson.sentences);
    });
    return this.article.summary;
  };

    exports.GetAPIs = GetAPIs;
  })(this);
