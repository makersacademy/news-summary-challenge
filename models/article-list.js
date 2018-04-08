function ArticleList() {
  this.articles = []
}

ArticleList.prototype = {

  addArticle: function (article) {
    this.articles.push(articles)
  },

  getArticlesFromAPI: function () {
    // get articles from API

    var response = {
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

    response.results.forEach(element => {
      var url = element.webUrl;
      var headline = element.webTitle;
      var summary = element.summary.text;
      this.addArticle(new Article(url, headline, summary))
    });

  },


  outputArticles: function () {
    return `<ul>` + this.articles.reduce((HTMLstring, article, index) => HTMLstring + `<li>` +  article.getHTML(index) + `</li>`, "") + `</ul>`
  }

}
