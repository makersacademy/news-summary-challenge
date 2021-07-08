(function(exports) {
  function Controller(list) {
    this._list = list;
  };

  Controller.prototype.renderList = function() {
    var view = new View(this._list);
    document.getElementById('app').innerHTML = view.render();
  };

  Controller.prototype.renderArticle = function (article) {
    var articleView = new ArticleView(article)
    document.getElementById('app').innerHTML = articleView.render();
  };

  Controller.prototype.getArticleUrl = function () {
    return location.hash.split("#")[1];
  };

  // Controller.prototype.changeArticleUrl = function () {
  //   window.addEventListener("hashchange", showArticleForCurrentPage);
  // };
  //
  // Controller.prototype.showArticle
  //
  // makeUrlChangeShowArticleForCurrentPage();
  //
  // function showArticleForCurrentPage() {
  //   showArticle(getArticleFromUrl(window.location));
  // };

  exports.Controller = Controller;
})(this);
