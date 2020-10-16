class ArticleController {
  
  constructor(articleList) {
    this.articleList = articleList;
    this.articleView = new ArticleView(this.articleList);
  }

  outputHtml() {
    var articleHtml = document.getElementById('mews_feed');
    articleHtml.innerHTML = this.articleView.
    
    noteHtml.innerHTML = this.articleView.output();
 }

}
