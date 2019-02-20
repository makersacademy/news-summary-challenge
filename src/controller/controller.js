(function (exports) {
  function Controller (headlines) {
    this.headlines = headlines
  }

  Controller.prototype.html = function (id) {
    var control = this
    var headlinesView = new HeadlinesView(this.headlines)
    document.getElementById(id).innerHTML = headlinesView.htmlString()
    control.casualObserver()
  }

  Controller.prototype.casualObserver = function () {
    var control = this
    var headlines = this.headlines
    window.addEventListener('hashchange', function () {
      if (window.location.hash === '') { control.html('app') } else {
        var location = window.location
        var id = location.hash.split('#article/')[1]
        var articles = headlines.list.filter(article => article.id === parseInt(id))
        var articleView = new ArticleView(articles[0])
        document.getElementById('app').innerHTML = articleView.htmlString()
      }
    })
  }

  exports.Controller = Controller
})(this)
