(function (exports) {
  class ArticleListView {
    constructor(articleList) {
      this._articleList = articleList;
    };

    ReturnHtml() {
      return this._articleList.articles().reduce((htmlString, article) => {
        return htmlString + `<p><a href="${article.url()}">${article.title()}</a></p>`
      }, "");
    };

    updateArticleList(articleList) {
     this._articleList = articleList
   };
 };

  exports.ArticleListView = ArticleListView;
})(this);
