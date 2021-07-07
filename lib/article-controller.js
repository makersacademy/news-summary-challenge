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
          self.articleListView.articleList.createArticle(article.webTitle, article.webUrl, article.id)
        })
        self.updateHTML()
      } else {
        throw new Error('Request failed')
      }
    }

    xhr.open('GET', 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?type=article')

    xhr.send()
  }

  function hashChange() {
    var self = this
    window.addEventListener("hashchange", this.showContentForCurrentPage())
  }

  function getIdFromUrl(location) {
    console.log(location.hash.split("#")[1])
    return location.hash.split("#")[1];
  }
  
  function showContentForCurrentPage() {
    console.log('change')
    this.summariseArticle(this.getIdFromUrl(window.location));
  }
  
  function summariseArticle(id) {
    if (!id) throw new Error('invalid id')
    var article = this.articleListView.articleList.show().filter(article => article.id === id)[0]

    var xhr = new XMLHttpRequest()
    xhr.responseType = 'json'

    var self = this

    console.log(self.url)

    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        console.log('summary')
        console.log(xhr)
        var summary = xhr.response.sentences.join('\n')
        self.showContent(summary)
      } else {
        throw new Error('Request failed')
      }
    }

    xhr.open('GET', `http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=${self.url}`)

    xhr.send()
  }

  function showContent(summary) {
    document.getElementById("summary").innerHTML = summary;
  }

  return {
    updateHTML: updateHTML,
    getArticles: getArticles,
    hashChange: hashChange,
    showContentForCurrentPage: showContentForCurrentPage,
    getIdFromUrl: getIdFromUrl,
    summariseArticle: summariseArticle,
    showContent: showContent
  }
})()