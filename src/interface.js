function initialize() {
  new APIController().getArticles(
    "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics?show-fields=thumbnail"
  )
  .then((articleList) => {
    var controller = new ArticleController(articleList);
    controller.loadHTML(controller.articleListView, "articleListContainer");
    controller.listenForHashChange();
  });
}
