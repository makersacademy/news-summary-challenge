class ArticleView {
  constructor(article) {
    this.article = article;
  }

  render() {
    return `<p class="article-content">${this.article.content}</p>`;
  }
}

export { ArticleView };
