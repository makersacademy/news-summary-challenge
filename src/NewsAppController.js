class NewsAppController {
  recordData(apiResponse) {
    this.articleData = apiResponse;
  }

  processData() {
    const collection = new ArticleCollection();
    this.articleData.response.results.forEach((result) => {
      const headline = result.webTitle;
      const url = result.webUrl;
      // const summary = result.summary.text;
      const summary = 'summary here';
      const article = new Article(headline, url, summary);
      collection.add(article);
    });
    this.collection = collection;
  }

  getArticles(callback) {
    const self = this;
    // TO DO: this.getSummaries();
    const makersApiURL = 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=';
    const contentURL = 'http://content.guardianapis.com/uk-news';
    const request = new XMLHttpRequest();
    request.open('GET', makersApiURL + contentURL);
    request.responseType = 'json';
    request.send();
    request.onload = function load() {
      self.recordData(request.response);
      self.processData();
      callback();
    };

    // serverResponse = {
    //   results: [
    //     {
    //       webUrl: 'url',
    //       webTitle: 'title',
    //       summary: { text: 'some summary text' },
    //     },
    //
    //     {
    //       webUrl: 'anotherurl',
    //       webTitle: 'anothertitle',
    //       summary: { text: 'different summary text' },
    //     },
    //   ],
    // };
  }
}
