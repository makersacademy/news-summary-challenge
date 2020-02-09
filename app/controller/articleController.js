(function (exports) {
  class ArticleController {
    constructor (articleList, listView, singleView) {
      this._articleList = articleList
      this._listView = new listView(this._articleList)
      this._singleView = singleView
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
            article = new Article(article.webTitle, article.apiUrl, article.fields.body, article.fields.trailText, article.id)
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
          let article = new Article(content.webTitle, content.apiUrl, content.fields.body, content.fields.trailText, content.id)
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

    listenToHash (elementID) {
      window.addEventListener('hashchange', () => { this.displaySingleArticle(elementID) })
    }

    displaySingleArticle (elementID) {
      if (window.location.hash === "") {
        this.displayArticlesList(elementID)
      } else {
      let element = document.getElementById(elementID)
      let articleId = this.getIdFromUrl()
      element.innerHTML = this._singleView.display(this._articleList.find(articleId))
      }
    }

    getIdFromUrl () {
      return window.location.hash.split('#articles/')[1]
    }
  }

  exports.ArticleController = ArticleController
})(this)