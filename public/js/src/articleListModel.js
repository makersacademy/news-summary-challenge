(function(exports) {
  function ArticleList() {
    this.list = []
  }
  ArticleList.prototype.listAll = function() {
    return this.list
  }
  ArticleList.prototype.add = function(headline) {
    let article = new Article(headline)
    this.list.push(article)
    article.id = this.list.indexOf(article)
  }

  ArticleList.prototype.getData = function() {
    let self = this
    fetch('http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/travel')
      .then(response => response.json())
      .then(data => {
        let results = data.response.results;
        results.forEach((item, i) => {
          self.add(item.webTitle)
        });
        console.log(self.list)
        articleController.insertHTML()
      })
  }

  exports.ArticleList = ArticleList
})(this)
