class NewsApi {
  loadHeadlines(callback) {
    fetch('http://localhost:3000/news')
      .then(response => response.json())
      .then(data => {
        callback(data.response.results);
      })
  }
}

module.exports = NewsApi
