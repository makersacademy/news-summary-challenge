function initialize() {
  var newsList = new NewsList();
  var newsDiv = document.getElementById('main');
  var searchButton.addEventListener('click', function(){
    var request = new XMLHttpRequest();
    var urlAPI = 'https://content.guardianapis.com/search?api-key=9ffe918e-97c6-466d-949e-c4f06d7079df'
    request.open('GET', urlAPI, true);
    request.onload = function() {
      var result = JSON.parse(this.response);
      var responseLength = result.respons.results.length;
      for (var i=0; i<responseLength; i++) {
        newsList.add(result.response,results[i].webTitle, result.response.results[i].webUrl, result.response.results[i].fields.thumbnail)

      }
      newsDiv.appendChild(articleList.displayArtickles());

    } 
    request.send(); 
  })
}

document.addEventListener("DOMContentLoaded", initialize);
