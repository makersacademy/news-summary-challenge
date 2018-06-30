(function(exports) {
  function NewsController(element) {
    this.element = element;
  };

  NewsController.prototype.sendAPIRequest = function () {
    var guardianApi = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?from-date=2018-06-30";

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = sendRequest;
    xhr.open('GET', guardianApi);
    xhr.send();

    function sendRequest() {
      var apiResponse;
      try {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status === 200) {
            apiResponse = xhr.responseText
            newsController.getHTML(apiResponse);
          } else {
            alert('There was a problem with the request.');
          }
        }
      }
      catch( e ) {
        alert('Caught Exception: ' + e.description);
      }
    }
  };

  NewsController.prototype.getHTML = function (apiResponse) {
    var json = JSON.parse(apiResponse)
    var results = json.response.results
    for (var i=0; i < results.length; i++) {
      this.element.innerHTML += `<br>` + results[i].webTitle;
    }
  };

  exports.NewsController = NewsController;
})(this);

var element = document.getElementById("news");
var newsController = new NewsController(element);
newsController.sendAPIRequest();
