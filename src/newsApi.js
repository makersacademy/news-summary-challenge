class newsApi {
  constructor() {
    this.url =
      "https://content.guardianapis.com/search?q=Spotlight&query-fields=headline&show-fields=thumbnail,headline,byline&order-by=newest&api-key=21831b4e-69fe-49f1-a75d-d24709168ad2";
  }

  loadNews(search, callback) {
    fetch(
      `https://content.guardianapis.com/search?q=${search}&query-fields=headline&show-fields=thumbnail,headline,byline&order-by=newest&api-key=21831b4e-69fe-49f1-a75d-d24709168ad2`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Load", data);
        callback(data.response.results);
      });
  }
}

module.exports = newsApi;
