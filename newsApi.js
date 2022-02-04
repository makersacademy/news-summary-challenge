class NewsApi {
  getNews(callback) {
    fetch('guardian api address goes here')
      .then(response => response.json())
      .then(data => {
        callback(data)
      });
  }
}

module.exports = NewsApi;