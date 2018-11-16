function ArticleController(articleList) {
  this.articleList = articleList;
  this.articleListView = new ArticleListView(articleList);
}

ArticleController.prototype.loadHTML = function(view, containerID) {
  container = document.getElementById(containerID);
  container.innerHTML = view.render();
};

ArticleController.prototype.listenForHashChange = function(articleContainerID) {
  window.addEventListener("hashchange", (event) => {
    event.preventDefault();
    var article = this.articleList.find(this.hashID());
    this.loadHTML(new ArticleView(article), articleContainerID);
  });
};

ArticleController.prototype.hashID = function() {
  return window.location.hash.split("/")[1];
};
