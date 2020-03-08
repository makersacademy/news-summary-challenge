(function(exports) {
  function ArticleListView(articleList) {
    this.articleList = articleList;
  }

  ArticleListView.prototype = {
    returnHTML: function() {
      var html = "<ul>";
      for(let i = 0; i < this.articleList.articles.length; i++ ) {
        html += `<li><div>${this.articleList.articles[i].showContent()}</div></li>`;
        // html += `<li><a href='#${this.articleList.articles[i].id}'>${this.articleList.articles[i].showContent()}</a></li>`;
      }
      html += "</ul>";
      return html;
    }
  }


  exports.ArticleListView = ArticleListView
})(this)