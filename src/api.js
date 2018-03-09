getNews = function() {

  var xhr = new XMLHttpRequest();
  xhr.open("GET", "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/world");
  xhr.onload = function() {
    if(xhr.status == 200) {
    var data = JSON.parse(xhr.responseText)
    newsarray = []
    for (var i = 0; i < 10; i++ ) {
      var date = data.response.results[i].webPublicationDate;
      var headline = data.response.results[i].webTitle;
      var url = data.response.results[i].webUrl;
      var singleNews = new News(date, headline, url)
      newsarray.push(singleNews);
    }
  } else {
    alert('Request failed.')
  }
    render(newsarray)
  }
  xhr.send();
}

render = function(newsarray) {
  let newsdiv = document.getElementById('news');
  newsarray.forEach(function(singleNews) {
    let newschild = document.createElement('div');
    newschild.setAttribute("id", "single");
    let date = document.createTextNode(singleNews.date);
    let headline = document.createTextNode(singleNews.headline);
    let url = document.createTextNode(singleNews.url);
    newsdiv.appendChild(newschild);
    newschild.appendChild(date);
    newschild.appendChild(headline);
    newschild.appendChild(url);
  })
}

getNews()
