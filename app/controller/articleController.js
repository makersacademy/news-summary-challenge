(function (exports) {
  class ArticleController {
    constructor (articleList) {
      this._articleList = articleList
    }

    get articleList () {
      return this._articleList
    }

    async fetchArticles (API) {
      try {
        const response = await fetch(API)
        if (!response.ok) {
          throw new Error(response.status)
        }
        const data = await response.json().then((data) => {
          let content = data.response.results
            return content.map((article) => this._articleList.add(new Article(article.webTitle, article.apiUrl)))
        })
        return data
      } catch (error) {
        console.log('Fetch error:', error)
      }
    }

    async fetchSingleArticle (API) {
      try {
        const response = await fetch(API)
        if (!response.ok) {
          throw new Error(response.status)
        }
        const data = await response.json().then((data) => {
          let content = data.response.content
            return this._articleList.add(new Article(content.webTitle, content.apiUrl))
        })
        return data
      } catch (error) {
        console.log('Fetch error:', error)
      }
    }

  }

  exports.ArticleController = ArticleController
})(this)