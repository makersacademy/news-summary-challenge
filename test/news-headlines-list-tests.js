"use strict";
(function(exports){

  var NewsHeadlineDouble = function(id, webTitle, apiUrl) {
      this.id = id;
      this.webTitle = webTitle;
      this.apiUrl = apiUrl;
    }

  NewsHeadlinesList.prototype.fetchData = function(){
    var self = this
    fetch('headlines.json')
    .then(function(response){
      return response.json();
    })
    .then(function(headlinesData){
        headlinesData.response.results.forEach(function(headline){
          self.headlines.push(new self.newsHeadlineFunction(self.id, headline.webTitle, headline.apiUrl))
          self.id += 1
          })
    });
}

  function testThatNewsHeadlinesIsObtainedAndStoredInNewsHeadlinesList(){

      var headlinesList = new NewsHeadlinesList(NewsHeadlineDouble)
      async function getResponseFromApi(){
        let promise = new Promise(function(resolve, reject){
          setTimeout(() => resolve(true), 100)
        });
        let result = await promise;
        assert.isTrue(headlinesList.getHeadlines()[0].webTitle === "Ministers deny plotting to oust May as Brexit rebels head for Chequers")
        assert.isTrue(headlinesList.getHeadlines()[0].id === 0)
        assert.isTrue(headlinesList.getHeadlines().length === 10)
      }
      getResponseFromApi();
    };

  testThatNewsHeadlinesIsObtainedAndStoredInNewsHeadlinesList();
})(this);
