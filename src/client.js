class Client {
  constructor() {
    this.makersAPIURL = 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=';
    this.guardianSearchEndpoint = 'http://content.guardianapis.com/search?show-fields=thumbnail';
  }

  fetchNews() {
    return fetch(this.makersAPIURL + this.guardianSearchEndpoint)
      .then(response => response.json()
        .then((data) => {
          return data;
        })
      );
  }
}

module.exports = Client;
