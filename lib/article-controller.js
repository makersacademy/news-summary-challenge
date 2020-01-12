function ArticleController(articleListView) {
  this.articleListView = articleListView
}

ArticleController.prototype = (function () {
  function updateHTML() {
    var HTML = this.articleListView.toHTML()
    document.getElementById('main').innerHTML = HTML
  }

  function getArticles(articleList) {
    var xhr = new XMLHttpRequest()
    xhr.responseType = 'json'

    var self = this

    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        var articles = xhr.response.response.results
        articles.forEach(article => {
          self.articleListView.articleList.listOfArticles.push(new Article(article.webTitle))
        })
        self.updateHTML()
      } else {
        console.log('failure')
        throw new Error('Request failed')
      }
    }

    xhr.open('GET', 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?type=article&show-fields=thumbnail')

    xhr.send()
  }

  return {
    updateHTML: updateHTML,
    getArticles: getArticles
  }
})()