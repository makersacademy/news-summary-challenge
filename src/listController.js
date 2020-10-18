"strict mode";

class ListController {
  constructor(list) {
    this.list = list;
    this.view = new ListView(list);
  }

  addArticle(headline, content, author, date, thumbnail) {
    this.list.addArticle(headline, content, author, date, thumbnail);
  }

  insertListHTML(element) {
    element.innerHTML = this.view.generateHeadlineHtml();
  }

  insertArticleHTML(article, element) {
    var view = new ArticleView(article);
    element.innerHTML = view.generateArticleHTML();
  }

  getArticleIdFromUrl(location) {
    console.log("location.hash is:" + location.hash.split("/")[0]);
    return location.hash.split("/")[1];
  }

  getArticleByID(id) {
    console.log(this.list.findArticleById(id));
    return this.list.findArticleById(id);
  }

  showArticleForCurrentURL(location, element) {
    var id = this.getArticleIdFromUrl(location);
    var article = this.getArticleByID(id);
    this.insertArticleHTML(article, element);
  }

  makeURLChangeShowArticleContent() {
    var controller = this;
    console.log("this is" + this);
    window.addEventListener("hashchange", function () {
      controller.showArticleForCurrentURL(
        window.location,
        document.getElementById("article")
      );
    });
  }

  makeApiRequest(url) {
    getData(url, saveJSONResponseAsList);
  }
}
