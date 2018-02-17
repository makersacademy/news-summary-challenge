class NewsAppController {
  recordData(apiResponse) {
    this.articleData = apiResponse;
  }

  processData() {
    const collection = new ArticleCollection();
    this.articleData.results.forEach((result) => {
      const headline = result.webTitle;
      const url = result.webUrl;
      const summary = result.summary.text;
      const article = new Article(headline, url, summary);
      collection.add(article);
    });
    this.collection = collection;
  }
}
