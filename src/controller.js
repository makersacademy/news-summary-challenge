(function(exports) {
  var Controller = function(list = new List(), listView = new ListView(list)) {
    this.list = list;
    this.listView = listView
    this.date = new Date()
  }

  Controller.prototype.printArticleList = function(elementID) {
    content = document.getElementById(elementID)
    content.innerHTML = this.listView.returnHTML()
  }

  Controller.prototype.printArticle = function(elementID, article) {
    var articleView = new ArticleView(article)
    document.getElementById(elementID).innerHTML = articleView.returnHTML()
  }

  Controller.prototype.populateList = function() {
    var xhr = new XMLHttpRequest()
    var date = this.formatDate()
    var controller = this
    var guardianURL = "http://content.guardianapis.com/search?section=uk-news&show-fields=thumbnail&from-date=" +
    date + "&to-date=" + date + "&order-by=newest&use-date=published&api-key=test"
    xhr.open('GET', guardianURL)
    xhr.onload = function() {
      if(xhr.status === 200) {
        controller.list.populateList(JSON.parse(xhr.responseText))
        controller.printArticleList('content')
      } else {
        alert('News Articles Request Failed. Status: ' + xhr.status)
      }
    }
    xhr.send()
  }

  Controller.prototype.formatDate = function() {
    return this.date.toISOString().slice(0,10)
  }

  exports.Controller = Controller
})(this)
