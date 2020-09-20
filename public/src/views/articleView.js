class ArticleView {
  constructor(text) {
    this.text = text;
  }

  displayArticle() {
    return `<div class=articleDiv>${this.text}</div>`;
  }
}
