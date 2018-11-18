import { ArticleListView as ArticleListView } from "./article-list-view.js";
import { ArticleView as ArticleView } from "./article-view.js";

class ArticleController {
  constructor(articleList) {
    this.articleList = articleList;
    this.articleListView = new ArticleListView(articleList);
  }

  loadHTML(view, containerID) {
    var container = document.getElementById(containerID);
    container.innerHTML = view.render();
  }

  listenForHashChange() {
    window.addEventListener("hashchange", (event) => {
      event.preventDefault();
      this._empty("article-content-container");
      var article = this.articleList.find(this.hashID());
      this.loadHTML(new ArticleView(article), `content-${article.id}`);
    });
  }

  hashID() {
    return window.location.hash.split("/")[1];
  }

  _empty(containerClass) {
    Array.from(document.getElementsByClassName(containerClass)).forEach(
      (element) => { element.innerHTML = ""; }
    );
  }
}

export { ArticleController };
