// takes json object (json parsed Guardian API query response) upon instantiation
function NewsManager (newsData) {
  this._newsData = newsData
}

NewsManager.prototype = {
  // extracts webTitle and thumbnail from json object and adds index as ID
  extractOverview: function () {
    return this._results().map(function (result, index) {
      return {
        articleId: index,
        title: result.webTitle,
        image: result.fields.thumbnail
      }
    })
  },
  // accesses news article by ID, extracts title, thumbnail, full text and webURL or article, keeps ID (index as per 'extractOverview')
  extractArticle: function (articleId) {
    let rawArticle = this._results()[articleId]
    return  {
      articleId: articleId,
      title: rawArticle.webTitle,
      image: rawArticle.fields.thumbnail,
      bodyText: rawArticle.fields.bodyText,
      webURL: rawArticle.webUrl
    }
  },
  // refactor for legibility
  _results: function () {
    return this._newsData.response.results
  }
}
