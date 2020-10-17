class ArticleController{

  constructor(articleListView) {
    this.listView = articleListView;
  }

  getHtml() {
    return this.listView.outputHTML();
  }

  insertHtml() {
    let articles = document.getElementById('articles');
    // let pageContent = this.getHtml();
    articles.innerHTML = this.getHtml(); 
  }

}


