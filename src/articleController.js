class ArticleController{

  constructor(articleListView) {
    this.listView = articleListView;
  }

  getHtml() {
    return this.listView.outputHTML();
  }

}