(function (exports) {
  class ArticleController {
    constructor (articleList) {
      this._articleList = articleList
    }

    get articleList () {
      return this._articleList
    }

    fetchArticles (API) {
      fetch(API)
        .then((response) => {
          if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' + response.status)
            return
          }
          response.json().then((data) => {
            let content = data.response.content
            return this._articleList.add(new Article(content.webTitle, content.apiUrl))
          })
        })
        .catch(function (error) {
          console.log('Fetch error :-S', error)
        })
    }
  }

  exports.ArticleController = ArticleController
})(this)