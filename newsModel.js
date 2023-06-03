class NewsModel {
  constructor() {
    this.articles = [];
  }

  fetchArticles() {
    return fetch(
      `https://content.guardianapis.com/search?api-key=2b82c557-d60f-49a4-a1d0-e9d7d9000dee`
    )
      .then((response) => response.json())
      .then((data) => {
        const processedData = data.response.results.map((article) => ({
          title: article.webTitle,
        }));
        this.articles = processedData;
      });
  }
}

module.exports = NewsModel;
