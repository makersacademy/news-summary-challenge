var header = document.querySelector('header');
var section = document.querySelector('section');
var requestURL = 'http://content.guardianapis.com/search?order-by=newest&show-fields=all&q=politics&api-key=test';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
  var response = request.response.response;

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
      for(var i = 0; i < this.SummaryList.length; i++) {
        var button = document.createElement('BUTTON');
        var title = document.createTextNode(response.results[i].webTitle);
        var body = document.createTextNode(response.results[i].fields.bodyText);
        var div = document.createElement('div');
        var image = document.createElement("IMG").setAttribute("src", response.results[i].fields.thumbnail);
        button.className= i;
        button.appendChild(image);
        section.appendChild(button).appendChild(div).appendChild(title);
      }
    }
  };


  var news = new NewsSummaryModel();
  console.log(news.SummaryList);
  news.createSummaryList();
  news.displaySummaryList();
  console.log(news.SummaryList);
};
