(function(exports) {
  var List = function() {
    this.articles = []
  }

  List.prototype.addArticle = function(article) {
    this.articles.push(article)
  }

  List.prototype.getArticles = function() {
    return this.articles
  }

  List.prototype.createAndAddArticle = function(url, headline, thumbnail) {
    var article = new Article(url, headline, thumbnail)
    this.addArticle(article)
  }

  List.prototype.populateList = function(data) {
    var entries = data['response']['results']
    for(var i=0;i<entries.length;i++) {
      var entry = entries[i]
      var article = new Article(entry["webUrl"],
                                entry["webTitle"],
                                entry["fields"]["thumbnail"]
                               )
      article.createSummary()
      this.addArticle(article)
    }
  }

  List.prototype.getArticleByID = function(num) {
    var arr = this.getArticles()
    for(var i=0;i<arr.length;i++) {
      if (arr[i].getID() == num) {
        return arr[i]
      }
    }
  }

  exports.List = List;
})(this)
