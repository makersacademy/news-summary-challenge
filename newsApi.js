class NewsApi {
  loadArticles(callback) {
    fetch('https://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search')
      .then((response) => response.json())
      .then((data) => callback(data))
      .catch((error) => {
        console.error(error);
      });
  }
}

module.exports = NewsApi;
