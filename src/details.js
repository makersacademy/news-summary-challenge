
(function(exports) {
  function newsDetails() {
    this.result
  };
  newsDetails.prototype.pull = function() {
    var xhr = new XMLHttpRequest();
    // xhr.open('GET', 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?from-date=2019-10-06');
    // xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.open('GET', 'http://localhost:8080')
    xhr.onload = function() {
      if (xhr.status === 200) {
        // exports.newsOverview.result = xhr.responseText // JSON/parse?
        // exports.newsOverview.result = JSON.parse(xhr.response)
        exports.newsDetails.result = testNewsOverview.response.results
        document.dispatchEvent(detailsLoaded);
      }
    };
    xhr.send();
  };
  exports.newsDetails = newsDetails;
  var detailsLoaded = new Event('buildDetails');
  document.addEventListener('buildDetails', function () { console.log('Details loaded') }, false);
})(this);
