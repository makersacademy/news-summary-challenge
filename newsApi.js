class NewsApi {

  loadHeadlines(callback) {
    fetch('http://localhost:3000/headlines')
      .then(response => response.json())
      .then(data => {
        callback(data)
      });
  }
}

module.exports = NewsApi;
