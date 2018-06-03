function updateDisplay() {
  var result = [];
  var url =
    'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?tag=politics/politics&order-by=newest&from-date=2018-06-02?show-fields=body';
  var parsedData = fetchData(url);
  var headlines = parsedData['response']['results'];
  headlines.forEach(function(headline) {
    result.push(
      `<div class="headline">
          <a href="#${headline['webUrl']}">${headline['webTitle']}</a>
          <p><a href="${headline['webUrl']}">Link to full article</a></p>
        </div>`
    );
  });
  document.querySelector('#display').innerHTML = result.join('');
}

function updateSummary(article) {
  var result = '<p>';
  var url = `http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=${article}`;
  var parsedData = fetchData(url);
  result += parsedData['text'] + '</p>';
  document.querySelector('#article-summary').innerHTML = result;
}

function fetchData(url) {
  var data = '';
  var request = new XMLHttpRequest();
  request.open('GET', url);
  request.responseType = 'text';
  request.onload = function() {
    data = JSON.parse(request.response);
  };
  request.send();
  return data;
}

window.addEventListener('hashchange', showArticleForCurrentPage);

function showArticleForCurrentPage() {
  updateSummary(getArticleFromURL(window.location));
}

function getArticleFromURL(location) {
  return location.hash.split('#')[1];
}

updateDisplay();
