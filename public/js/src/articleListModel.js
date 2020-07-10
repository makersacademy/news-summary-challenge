(function(exports) {
  function ArticleList() {
    this.list = []
  }
  ArticleList.prototype.listAll = function() {
    return this.list
  }
  ArticleList.prototype.add = function(article) {
    this.list.push(article)
    article.id = this.list.indexOf(article)
  }

  ArticleList.prototype.getData = function(callback) {
    let self = this
    fetch('http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/travel')
      .then(response => response.json())
      .then(data => {
        let results = data.response.results;
        results.forEach((item, i) => {
          let article = new Article(item.webTitle, item.apiUrl)
          self.add(article)
        });
        articleController.insertHTML()
        // callback()
      })
  }

  exports.ArticleList = ArticleList
})(this)
