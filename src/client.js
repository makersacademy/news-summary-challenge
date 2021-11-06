class Client {
  constructor() {
    this.makersAPIURL = 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=';
    this.guardianSearchEndpoint = 'http://content.guardianapis.com/search';
  }

  fetchNews(callback) {
    fetch(this.makersAPIURL + this.guardianSearchEndpoint)
      .then(response => response.json()
        .then((data) => {
          callback(data);
        })
      );
  }
}

module.exports = Client;
