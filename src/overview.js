
(function(exports) {
  function newsOverview() {
    this.result
  };
  newsOverview.prototype.pull = function() {
    var xhr = new XMLHttpRequest();
    // xhr.open('GET', 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?from-date=2019-10-06');
    // xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.open('GET', 'http://localhost:8080')
    xhr.onload = function() {
      if (xhr.status === 200) {
        // exports.newsOverview.result = xhr.responseText // JSON/parse?
        // exports.newsOverview.result = JSON.parse(xhr.response)
        exports.newsOverview.result = testNewsOverview.response
        document.dispatchEvent(overviewLoaded);
      }
    };
    xhr.send();
  };
  newsOverview.prototype.displayOverview = function() {
    for (i=0; i< exports.newsOverview.result.results.length; i++) {
      document.getElementById('headlines')
      .insertAdjacentHTML('afterend', exports.newsOverview.createArticleOverview(i));
    }
  console.log('Overview loaded')
  }
  newsOverview.prototype.createArticleOverview = function(i) {
    var htmlString = '<a href=#' + i + '>';
    htmlString += '<div id= headlines_pic' + i + '><img src=' + exports.newsOverview.result.results[i].fields.thumbnail + '></div>'
    htmlString += '<div id= headlines' + i + '>' + exports.newsOverview.result.results[i].webTitle+ '</div></a></br>'
    return htmlString
  }
  exports.newsOverview = newsOverview;
  var overviewLoaded = new Event('buildOverview');
  document.addEventListener('buildOverview', function () { exports.newsOverview.displayOverview() }, false);
})(this);
