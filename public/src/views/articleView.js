class ArticleView {
  constructor(articleList, idNumber) {
    this.article = articleList[idNumber];
  }

  displayArticle() {
    return `<div class=articleDiv>${this.article.innerHTML}</div>`;
  }
}
