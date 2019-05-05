const COLLECTOR = new NewsCollection();

getNews = function() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/world?show-fields=thumbnail"); // gdzie i co (get)
  xhr.onload = function() { // jak odpowiedz z zapytania dojdzie - czyli z send - to zrob to co nizej
    if(xhr.status == 200) {
      var data = JSON.parse(xhr.responseText)
      for (var i = 0; i < 10; i++ ) {
        var headline = data.response.results[i].webTitle;
        var url = data.response.results[i].webUrl;
        var id = i.toString();
        if (data.response.results[i].fields) {
          var linkToImage = data.response.results[i].fields.thumbnail;
        } else {
          var linkToImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/No_image_available_600_x_450.svg/2000px-No_image_available_600_x_450.svg.png'
        }
        var singleNews = new News(headline, url, id, linkToImage)
        getSummary(singleNews); // getNews doesnt wait for the result on onload in getSmmmary
        COLLECTOR.content.push(singleNews);
      }
    }
    render() // wyrenderuje sie dopuero, jak ten blok wyżej sie zrealizuje.
  }
  xhr.send(); // zrob to co jest zdefiniowane w open  // its not sending here, only when browser is ready. - not sneding, queing to be send.
}

render = function() {
  let newsdiv = document.getElementById('news');
  COLLECTOR.content.forEach(function(singleNews) {
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
  _cleanField();
  _displaySummary(singleNews);
  _displayHeadline(singleNews);
  _displayUrl(singleNews);
  _displayImage(singleNews);
}

_cleanField = function() {
  let info = document.getElementById('info')
  let box = document.getElementById('summary_box')
  info.innerHTML = "";
  box.setAttribute("class", "afterclick");

}

_displayHeadline = function(singleNews) {
  let headline = document.createTextNode(singleNews.headline);
  let headlinebox = document.getElementById('headline_box');
  headlinebox.innerHTML = "";
  headlinebox.appendChild(headline);
}

_displaySummary = function(singleNews) {
  let summary = document.createTextNode(singleNews.summary);
  let contentbox = document.getElementById('content_box');
  contentbox.innerHTML = "";
  if (singleNews.summary !== undefined) {
    contentbox.appendChild(summary);
  } else {
    contentbox.innerHTML = "Unfortunately the daily limit for summaries for Aylien API has been exceeded. \n Today you will be able to read only the headlines, for summaries come back tomorrow. \n\n\n SORRY!";
    contentbox.style.color = '#c32424';
    contentbox.style.background = "#ff000026";
  }
}

_displayUrl = function(singleNews) {
  let url = document.createTextNode(singleNews.url);
  let urlbox = document.getElementById('url_box');
  urlbox.innerHTML = "";
  urlbox.appendChild(url);
  urlbox.setAttribute("href", singleNews.url);
}

_displayImage = function(singleNews) {
  let linkToImage = document.createTextNode(singleNews.linkToImage);
  let imgbox = document.getElementById('img_box');
  imgbox.appendChild(linkToImage);
  imgbox.setAttribute("src", singleNews.linkToImage);
}

getNews()
