class NewsApi {
  loadArticles(url, callback) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => callback(data))
      .catch((error) => {
        console.error(error);
      });
  }

  loadSummary(url, callback) {
    fetch(`http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=${url}`)
      .then((response) => response.json())
      .then((data) => callback(data))
      .catch((error) => {
        console.error(error);
      });
  }
}

module.exports = NewsApi;
