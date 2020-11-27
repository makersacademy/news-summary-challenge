(function(exports) {
  function ArticleListView(articleList) {
    this.articleList = articleList;
  }

  ArticleListView.prototype.returnHTML = function() {
    return this.articleList.getList().reduce((acc, val) => {
      return acc += '<div>'
        +`<p>${val.section()}</p>`
        +`<img src="${val.thumbnail()}">`
        + `<a href='#article/${val.getId()}'>`
        +`<h3>${val.title()}</h3>`
        +'</a></div>';
    },'');
  }

  exports.ArticleListView = ArticleListView;
})(this);