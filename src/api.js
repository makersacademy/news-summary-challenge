getNews = function() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/world");
  xhr.onload = function() { // jak odpowiedz z zapytania dojdzie.
    if(xhr.status == 200) {
      var data = JSON.parse(xhr.responseText)
      newsarray = []
      for (var i = 0; i < 10; i++ ) {
        var headline = data.response.results[i].webTitle;
        var url = data.response.results[i].webUrl;
        var id = i.toString();
        var singleNews = new News(headline, url, id)
        getSummary(singleNews);
        newsarray.push(singleNews);
      }
    }
    render(newsarray) // wyrenderuje sie dopuero, jak ten blok wyżej sie zrealizuje.
  }
  xhr.send();
}

render = function(newsarray) {
  let newsdiv = document.getElementById('news');
  newsarray.forEach(function(singleNews) {
    let newschild = document.createElement('div');
    newschild.setAttribute("id", singleNews.id);
    newschild.setAttribute("class", "single");
    let headline = document.createElement('div');
    headline.setAttribute("id", "headline");
    let url = document.createElement('div');
    url.setAttribute("id", "url");
    headline.appendChild(document.createTextNode(singleNews.headline));
    url.appendChild(document.createTextNode(singleNews.url));
    newschild.appendChild(headline);
    newschild.appendChild(url);
    newsdiv.appendChild(newschild);
    newschild.onclick = function() {_onClick(singleNews)};
  })
}

getSummary = function(singleNews) { // funkcje asynchroniczne nie zwracac rzeczy.
  var xhr = new XMLHttpRequest();
  xhr.open("GET", 'http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=' + singleNews.url);
  xhr.onload = function() {  // 43 --> 50 --> 44 - jak dostaniesz dane z API, zrob to.
    if(xhr.status == 200) {
      var summary = JSON.parse(xhr.responseText)
      singleNews.summary = summary.sentences
    }
  }
  xhr.send(); // w tym miejscu przegladarka odpytuje API.
}

function _onClick(singleNews) {
  let summary = document.createTextNode(singleNews.summary);
  let display = document.getElementById('summary_box');
  display.innerHTML = "";
  display.appendChild(summary);
}

getNews()
