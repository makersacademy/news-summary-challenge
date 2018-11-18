class ArticleListView {
  constructor(articleList) {
    this.articleList = articleList;
  }

  render() {
    var html = "<ul>";
    this.articleList.articles.forEach((article) => {
      html += this._list(article);
    });
    return html + "</ul>";
  }

  _list(article) {
    return `<li><div class='article-head'><div class='article-image'><img src='${article.imageURL}'></div><div class='article-headline'><a href='#articles/${article.id}'>${article.headline}</a></div></div><div class='article-content-container' id='content-${article.id}'></div></li>`;
  }
}

export { ArticleListView };
