(function(exports) {
  function ArticleView(articleJSON, articleModel) {
    this.articleJSON = articleJSON
    this.articleModel = articleModel
  }

  ArticleView.prototype.returnHTML = function() {
    return '<div>'
        +`<h1>${this.articleModel.title()}</h1>`
        +`<img src="${this.articleModel.thumbnail()}">`
        +`<p>${this.articleJSON.text}</p>`
        +'</div>';
  };

  exports.ArticleView = ArticleView;
})(this);