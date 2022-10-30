class GuardianApi {
  constructor() {
    this.apiURL = `https://content.guardianapis.com/search?api-key=${apikey}&show-fields=thumbnail`;
  }
  loadArticles(callback) {
    fetch(this.apiURL)
      .then((response) => response.json())
      .then((data) => {
        callback(data);
      });
  }
}

module.exports = GuardianApi;
