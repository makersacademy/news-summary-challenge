(function (exports) {
  class ArticleController {
    constructor (articleList, listView) {
      this._articleList = articleList
      this._listView = new listView(this._articleList)
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
          return content.map((article) => {
            article = new Article(article.webTitle, article.apiUrl, article.fields.body, article.fields.trailText)
            this._articleList.add(article)
            return article
          })
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
          let article = new Article(content.webTitle, content.apiUrl, content.fields.body, content.fields.trailText)
          this._articleList.add(article)
          return article
        })
        return data
      } catch (error) {
        console.log('Fetch error:', error)
      }
    }

    displayArticlesList (elementID) {
      let element = document.getElementById(elementID)
      element.innerHTML = this._listView.display()
    }

  }

  exports.ArticleController = ArticleController
})(this)