"use strict";
(function(exports){

  var NewsHeadlineDouble = function(id, webTitle, apiUrl) {
      this.id = id;
      this.webTitle = webTitle;
      this.apiUrl = apiUrl;
    }

  function testThatNewsHeadlinesIsObtainedAndStoredInNewsHeadlinesList(){

    var responseData;
    var aReq = new XMLHttpRequest();
    aReq.addEventListener("load", function(){
      responseData = aReq.responseText;
      var headlinesData = JSON.parse(responseData)
      var headlinesList = new NewsHeadlinesList(NewsHeadlineDouble)
      headlinesData.response.results.forEach(function(headline){
        headlinesList.storeHeadline(headline.webTitle, headline.apiUrl)
      })
      assert.isTrue(headlinesList.getHeadlines()[0].webTitle === headlinesData.response.results[0].webTitle)
      assert.isTrue(headlinesList.getHeadlines()[0].id === 0)
      assert.isTrue(headlinesList.getHeadlines().length === headlinesData.response.results.length)
    })
    aReq.open("GET", 'headlines.json')
    aReq.send()
  }
  testThatNewsHeadlinesIsObtainedAndStoredInNewsHeadlinesList();
})(this);
