class NewsPull {
  constructor() {
    this.articles = [];
  }

  async fetchNews() {
    this.articles = article2.response.results.map((each) => {
      return new ArticleModel(
        each.id,
        each.webPublicationDate,
        each.sectionName,
        each.webTitle,
        each.webUrl
      );
    });
    // let fetchData;
    // await fetch('https://content.guardianapis.com/search?api-key=' + myApiKey)
    //   .then(async (response) => {
    //     if (response.status !== 200) {
    //       console.log(
    //         'Looks like there was a problem. Status Code: ' + response.status
    //       );
    //       return;
    //     }

    //     // Examine the text in the response
    //     await response.json().then(function (data) {
    //       fetchData = data;
    //     });
    //   })
    //   .catch(function (err) {
    //     console.log('Fetch Error: ', err);
    //   });
    // this.updateArticles(fetchData);
  }

  updateArticles(fetchData) {
    fetchData.response.results.map((each) => {
      this.articles.push(
        new ArticleModel(
          each.id,
          each.webPublicationDate,
          each.sectionName,
          each.webTitle,
          each.webUrl
        )
      );
    });
  }
}
