function XhrProvider() {

  function getXhr() {
    return new XMLHttpRequest()
  }

  return {
    getXhr: getXhr
  }
}

function ApiService(xhrProvider) {

  function sendApiRequest(verb, url, callback, error) {
    var xhr = xhrProvider.getXhr();
    xhr.open(verb, url);
    xhr.onload = function(e) {
      if (xhr.status === 200) {
        var data = JSON.parse(xhr.responseText)
        callback(data);
      } else {
        error(e)
      }
    };
    xhr.send();
  }

  return {
    sendApiRequest: sendApiRequest
  }
}

function NewsController(apiService) {

  function handleGetNews(data) {
    toView(render(data.response));
  }

  function errorHandler(e) {
    console.log(e)
  }

  getNews = function(){
    apiService.sendApiRequest(
      'GET',
      'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/world',
      handleGetNews,
      errorHandler
    )
  }
  return {
    getNews: getNews
  }
}

var apiService = new ApiService();
var newsController = new NewsController(apiService);

getSummary = function(link){
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=' + link);
  xhr.onload = function() {
    if (xhr.status === 200) {
      var data = JSON.parse(xhr.responseText)
      toSummaryView(summaryRender(data))
    }
    else {
      alert('Request failed.  Returned status of ' + xhr.status);
    }
  };
  xhr.send();
}

render = function(news) {
  var htmlString = ""
  for (var i = 0; i < news.results.length; i++){
      htmlString += `<a href = "${news.results[i].webUrl}"<li>
                    <div>${news.results[i].webTitle}</a></div>
                    <button onClick="getSummary('${news.results[i].webUrl}')">Get Summary </button>
                    </li>`
  }
  return (`<ul>${htmlString}</ul>`)
}

summaryRender = function(singleNews){
  var htmlString = ''
  for(var i = 0; i < singleNews.sentences.length; i++){
    htmlString += `<div>${singleNews.sentences[i]}</div><br>`
  }
    return (`${htmlString}`)
}

toView = function(list) {
  oops = document.getElementById('app');
  oops.innerHTML = list;
}

toSummaryView = function(summary){
  var ooh = document.getElementById('summary');
  ooh.innerHTML = summary;
}

getNews();
