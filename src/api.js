getNews = function() {

  var xhr = new XMLHttpRequest();
  xhr.open("GET", "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/world");
  xhr.onload = function() {
    if(xhr.status == 200) {
    var data = JSON.parse(xhr.responseText)
    newsarray = []
    for (var i = 0; i < 10; i++ ) {
      var headline = data.response.results[i].webTitle;
      var url = data.response.results[i].webUrl;
      var id = i.toString();
      var singleNews = new News(headline, url, id)
      getSummary(singleNews)
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
    let headlinetext = document.createTextNode(singleNews.headline);
    let urltext = document.createTextNode(singleNews.url);
    let newschild = document.createElement('div');
    newschild.setAttribute("id", singleNews.id);
    newschild.setAttribute("class", "single");
    let headline = document.createElement('div');
    headline.setAttribute("id", "headline");
    let url = document.createElement('div');
    url.setAttribute("id", "url");
    headline.appendChild(headlinetext);
    url.appendChild(urltext);
    newschild.appendChild(headline);
    newschild.appendChild(url);
    newsdiv.appendChild(newschild);
  })
}

getSummary = function(singleNews) {

  var xhr = new XMLHttpRequest();
  xhr.open("GET", 'http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=' + singleNews.url);
  xhr.onload = function() {
    if(xhr.status == 200) {
    var summary = JSON.parse(xhr.responseText)
    singleNews.summary = summary;
    } else {
    alert('Request failed.')
  }
}
  xhr.send();
}

getNews()
