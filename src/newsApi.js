class newsApi {

  constructor() {
    this.url = 'https://content.guardianapis.com/search?q=Spotlight&query-fields=headline&show-fields=thumbnail,headline,byline&order-by=newest&api-key=21831b4e-69fe-49f1-a75d-d24709168ad2'
  }

  loadNews(callback) {
    fetch(this.url)
    .then(response => response.json())
    .then((data) => {
      console.log('Load', data);
      // let news = data;
      // news.map((article) => {
      //   let headline = article.response.results[0].fields.headline;
      //   let photo = article.response.results[0].fields.thumbnail;
      // })
      callback(data.response.results);
    })
  }
}

module.exports = newsApi;