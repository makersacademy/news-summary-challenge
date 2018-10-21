function NewsManager (newsData) {
  this._newsData = newsData
}

NewsManager.prototype = {
  extractOverview: function () {
    return this._results().map(function (result, index) {
      return {
        articleId: index,
        title: result.webTitle,
        image: result.fields.thumbnail
      }
    })
  },

  extractArticle: function (articleId) {
    let rawArticle = this._results()[articleId]
    return  {
      title: rawArticle.webTitle,
      image: rawArticle.fields.thumbnail,
      bodyText: rawArticle.fields.bodyText
    }
  },

  _results: function () {
    return this._newsData.response.results
  }
}
