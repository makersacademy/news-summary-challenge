function NewsManager (newsData) {
  this._newsData = newsData
}

NewsManager.prototype = {
  extractHeadlines: function () {
    return this._results().map(function (result, index) {
      return {
        articleId: index,
        title: result.webTitle,
        image: result.fields.thumbnail
      }
    })
  },

  // extractArticle: function (articleID) {
  //   return this._results().map(function(result){
  //     return result.fields.bodyText
  //   })
  // },

  _results: function () {
    return this._newsData.response.results
  }

}