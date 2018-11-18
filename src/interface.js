import { APIController as APIController } from "./api-controller.js";
import { ArticleController as ArticleController } from "./article-controller.js";

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

export { initialize };
