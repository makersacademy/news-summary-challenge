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
    this.results = response.results;
  }

  NewsSummaryModel.prototype = {
    createSummaryList: function(){
      for(var i = 0; i < this.results.length; i++) {
        var button = document.createElement('BUTTON');
        var title = document.createTextNode(response.results[i].webTitle);
        var body = document.createTextNode(response.results[i].fields.bodyText);
        var div = document.createElement('div');
        var image = document.createElement("IMG").setAttribute("src", response.results[i].fields.thumbnail);
        button.className = i;
        button.appendChild(image);
        section.appendChild(button).appendChild(div).appendChild(title);
      }
    }
  };


  var news = new NewsSummaryModel();
  news.createSummaryList();
  news.displaySummaryList();
};
