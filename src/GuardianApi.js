class GuardianApi {
  constructor() {
    this.apiURL = `https://content.guardianapis.com/search?api-key=55e5d388-8b9e-477c-b420-c20a69c2be80&show-fields=thumbnail`;
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
