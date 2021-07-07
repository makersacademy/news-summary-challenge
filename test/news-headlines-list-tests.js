"use strict";
(function(exports){

  var NewsHeadlineDouble = function(id, webTitle, apiUrl) {
      this.id = id;
      this.webTitle = webTitle;
      this.apiUrl = apiUrl;
    }

  function testThatNewsHeadlinesIsObtainedAndStoredInNewsHeadlinesList(){

      var headlinesList = new NewsHeadlinesList(NewsHeadlineDouble, 'headlines.json')
      headlinesList.fetchData()
      .then(function() {
        assert.isTrue(headlinesList.getHeadlines()[0].webTitle === "Ministers deny plotting to oust May as Brexit rebels head for Chequers")
        assert.isTrue(headlinesList.getHeadlines()[0].id === 0)
        assert.isTrue(headlinesList.getHeadlines().length === 10)
      })
    };

  testThatNewsHeadlinesIsObtainedAndStoredInNewsHeadlinesList();
})(this);
