var header = document.querySelector('header');
var section = document.querySelector('section');
var requestURL = 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics&show-elements=image';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {

  function NewsSummaryModel(){
    this.response = request.response.response.results;
    this.SummaryList = [];
  }

  NewsSummaryModel.prototype = {
    createSummaryList: function(){
      for(var i = 0; i < this.response.length; i++){
        this.SummaryList.push(this.response[i]);
      }
    },
    displaySummaryList: function(){
      this.SummaryList.forEach(function(entry) {
        console.log(entry);
        header.innerHTML += (entry.webTitle + "<br>");
      });
    }
  };


  var news = new NewsSummaryModel()
  console.log(news.NewsList)
  news.createSummaryList()
  news.displaySummaryList()
  console.log(news.NewsList)
  console.log(news.requestresponse)
};
