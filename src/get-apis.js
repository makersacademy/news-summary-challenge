(function(exports) {
  function GetAPIs () {
    this.articleList = new ArticleList();
  }

  // GetAPIs.prototype.headlinesAPI = function() {
  //   fetch('https://content.guardianapis.com/search?api-key=b5a397fe-7a8b-47c4-9727-abc75851d690')
  //     .then(function(response) {
  //       return response.json();
  //     })
  //     .then(myJson => {
  //       var results = myJson.response.results;
  //       for (var i = 0; i < results.length; i++) {
  //         this.articleList.create(results[i].webTitle, results[i].webUrl);
  //       }
  //     });
  //     return this.articleList;
  //   };

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

//   GetAPIs.prototype.summaryAPI = function() {
//     fetch("https://api.aylien.com/api/v1/summarize", {
//       mode: 'no-cors',
//       body: "sentences_number=3&url=https://content.guardianapis.com/search?api-key=b5a397fe-7a8b-47c4-9727-abc75851d690",
//       headers: {
//         "Content-Type": "application/x-www-form-urlencoded",
//         "X-Aylien-Textapi-Application-Id": "687d69ca",
//         "X-Aylien-Textapi-Application-Key": "5a4aaf7d044f737bfbe716c2d5cb5749"
//       },
//       method: "POST"
// })
//   .then(function(response) {
//     return response.json();
//   })
//   .then(myJson => {
//     console.log(String(myJson));
//   });
// };





    exports.GetAPIs = GetAPIs;
  })(this);
