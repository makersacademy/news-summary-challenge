(function (exports) {
  function NewsAPI() {
  }

  NewsAPI.prototype.getNews = function () {

    return promise = fetch('https://api.nextgen.guardianapps.co.uk/uk/lite.json')
      .then(response => response.json())
      .then(data => data)
  }
  exports.NewsAPI = NewsAPI
})(this);