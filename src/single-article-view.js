'use strict';

class SingleArticleView {
  constructor(article = new Article()) {
    this.article = article;
  }

  generateArtHTML() {
    return
    `<div id="container">
      <h2>${this.article.getHeadline()}</h2>
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
