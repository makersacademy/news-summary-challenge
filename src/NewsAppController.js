class NewsAppController {
  recordData(apiResponse) {
    this.articleData = apiResponse;
  }

  processData() {
    const collection = new ArticleCollection();
    this.articleData.response.results.forEach((result) => {
      const headline = result.webTitle;
      const url = result.webUrl;
      const summary = result.summary.text;
      const article = new Article(headline, url, summary);
      collection.add(article);
    });
    this.collection = collection;
  }

  getArticles() {
    // TO DO: implement makers api request
    // TO DO: this.getSummaries();
    const response = {
      results: [
        {
          webUrl: 'url',
          webTitle: 'title',
          summary: { text: 'some summary text' },
        },

        {
          webUrl: 'anotherurl',
          webTitle: 'anothertitle',
          summary: { text: 'different summary text' },
        },
      ],
    };
    this.recordData(response);
  }
}
