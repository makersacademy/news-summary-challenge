function ArticleController(articleList) {
  this.articleList = articleList;
  this.articleListView = new ArticleListView(articleList);
}

ArticleController.prototype.loadHTML = function(view, containerID) {
  container = document.getElementById(containerID);
  container.innerHTML = view.render();
};

ArticleController.prototype.listenForHashChange = function() {
  window.addEventListener("hashchange", (event) => {
    event.preventDefault();
    this._empty("article-content-container");
    var article = this.articleList.find(this.hashID());
    this.loadHTML(new ArticleView(article), `content-${article.id}`);
  });
};

ArticleController.prototype.hashID = function() {
  return window.location.hash.split("/")[1];
};

ArticleController.prototype._empty = function(containerClass) {
  Array.from(document.getElementsByClassName(containerClass)).forEach(
    (element) => { element.innerHTML = ""; }
  );
};
