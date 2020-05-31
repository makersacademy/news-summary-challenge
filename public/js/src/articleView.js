(function(exports) {
  function ArticleView(article = new Article) {
    this.article = article
  }

  ArticleView.prototype.returnHTMLstring = function() {
    let stringHTML;
    if (this.article.url.length !== 0) {
      fetch('http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http' + this.article.url.substring(5) + '?show-fields=body')
        .then(response => response.json())
        .then(data => {
          let result = data.response.content;
          let content = result.fields.body
          stringHTML = content;
          document.getElementById('app').innerHTML = stringHTML;
        })
    } else {
      stringHTML = '<ul><li><div>' + this.article.headline + '</div></li></ul>'
      document.getElementById('app').innerHTML = stringHTML;
      return stringHTML
    }
  }

  exports.ArticleView = ArticleView
})(this)
