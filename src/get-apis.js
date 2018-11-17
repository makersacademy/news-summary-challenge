(function(exports) {
  function GetAPIs () {
    this.articleList = new ArticleList();
  }

  GetAPIs.prototype.headlinesAPI = function() {
    fetch('https://content.guardianapis.com/search?api-key=b5a397fe-7a8b-47c4-9727-abc75851d690')
      .then(function(response) {
        return response.json();
      })
      .then(myJson => {
        var results = myJson.response.results;
        for (var i = 0; i < results.length; i++) {
          this.articleList.create(results[i].webTitle, results[i].webUrl);
        }
      });
      return this.articleList;
    };

  // GetAPIs.prototype.headlinesAPI = function(callback) {
  //   fetch('https://content.guardianapis.com/search?api-key=b5a397fe-7a8b-47c4-9727-abc75851d690')
  //     .then(function(response) {
  //       return response.json();
  //     })
  //     .then(callback);
  //   };
  //
  // GetAPIs.prototype.getHeadlines = function() {
  //   this.headlinesAPI(function(json) {
  //     var results = myJson.response.results;
  //     for (var i = 0; i < results.length; i++) {
  //       this.articleList.create(results[i].webTitle);
  //     }
  //   });
  // };

    exports.GetAPIs = GetAPIs;
  })(this);
