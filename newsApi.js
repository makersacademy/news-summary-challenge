class NewsApi {
  constructor() {
    this.url = "https://content.guardianapis.com/search?q=&query-fields=headline&show-fields=thumbnail,headline,byline&order-by=newest&api-key=${ENV['GUARDIAN_API_KEY']}";
  }

  loadArticles(callback) {
    fetch(this.url)
    .then(rest => rest.json())
    .then(data => callback(data))
    .catch(function() {
      console.log('error');
    });
  }
  
}

module.exports = NewsApi;