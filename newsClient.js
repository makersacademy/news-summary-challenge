class NewsClient {
  constructor() {
    this._fetchUrl =
      'https://content.guardianapis.com/search?q=&query-fields=headline&show-fields=thumbnail,headline,byline&order-by=newest&api-key=d744d242-e274-4f2f-987c-3dd2693c60f0';
  }
  loadNews(callback) {
    fetch(this._fetchUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log('data: ', data);
        callback(data);
      });
  }
}

module.exports = NewsClient;
