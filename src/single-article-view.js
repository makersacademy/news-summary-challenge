'use strict';

class SingleArticleView {
  constructor(article = new Article()) {
    this.article = article;
  }

  generateArtHTML() {
    return
    `<div class="article">
      <h2 class="title">${this.article.getHeadline()}</h2>
      <br>
      <img src="${this.article.getThumbnail()}" alt="${this.article.getHeadline().slice(0, 15)}">
      <br>
      <div class="article-link">
      <a href="${this.article.getURL()}">Read on The Guardian</a>
      </div>
      ${this.article.getSummary()}
    </div>`;
  }

}
