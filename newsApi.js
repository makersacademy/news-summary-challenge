class NewsApi {
  loadData(callback) {
    fetch('http://localhost:3000/news')
      .then(response => response.json())
      .then(data => {
        callback(data)
      });
  }
}

module.exports = NewsApi;