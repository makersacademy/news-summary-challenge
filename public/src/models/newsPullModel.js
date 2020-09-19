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
    // await fetch(
    //   'https://content.guardianapis.com/search?api-key=curl' + myApiKey
    // )
    //   .then(async (response) => {
    //     if (response.status !== 200) {
    //       console.log(
    //         'Looks like there was a problem. Status Code: ' + response.status
    //       );
    //       return;
    //     }

    //     // Examine the text in the response
    //     await response.json().then(function (data) {
    //       this.articles = data.response.results.map((each) => {
    //         return new ArticleModel(
    //           each.id,
    //           each.webPublicationDate,
    //           each.sectionName,
    //           each.webTitle,
    //           each.webUrl
    //         );
    //       });
    //     });
    //   })
    //   .catch(function (err) {
    //     console.log('Fetch Error: ', err);
    //   });
  }
}
