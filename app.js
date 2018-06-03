function updateDisplay() {
  var url =
    'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?tag=politics/politics&order-by=newest&from-date=2018-06-02?show-fields=body';

  var request = new XMLHttpRequest();
  request.open('GET', url);
  request.responseType = 'text';
  request.onload = function() {
    var result = [];
    var parsedData = JSON.parse(request.response);
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
  };
  request.send();
}

updateDisplay();
