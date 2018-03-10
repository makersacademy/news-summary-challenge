getNews = function() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/world"); // gdzie i co (get)
  xhr.onload = function() { // jak odpowiedz z zapytania dojdzie - czyli z send - to zrob to co nizej
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
  xhr.send(); // zrob to co jest zdefiniowane w open
}

render = function(newsarray) {
  let newsdiv = document.getElementById('news');
  newsarray.forEach(function(singleNews) {
    let newschild = document.createElement('div');
    newschild.setAttribute("id", singleNews.id);
    newschild.setAttribute("class", "single");
    let headline = document.createElement('div');
    headline.setAttribute("id", "headline");
    headline.appendChild(document.createTextNode(singleNews.headline));
    newschild.appendChild(headline);
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
  let headline = document.createTextNode(singleNews.headline);
  let url = document.createTextNode(singleNews.url);
  let contentbox = document.getElementById('content_box');
  let headlinebox = document.getElementById('headline_box');
  let urlbox = document.getElementById('url_box');
  contentbox.innerHTML = "";
  headlinebox.innerHTML = "";
  urlbox.innerHTML = "";
  contentbox.appendChild(summary);
  headlinebox.appendChild(headline);
  urlbox.appendChild(url);
}

getNews()
