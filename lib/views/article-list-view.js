(function(exports) {
  function ArticleListView(articleList) {
    this.articleList = articleList;
  }

  ArticleListView.prototype = {
    returnHTML: function() {
      var html ='';
      for(let i = 0; i < this.articleList.articles.length; i++ ) {
        html += `<div><a href='#articles/${this.articleList.articles[i].id}'>${this.articleList.articles[i].showContent()}</a></div>`;
      }
      return html;
    }
  }


  exports.ArticleListView = ArticleListView
})(this)