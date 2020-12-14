class SingleArticleView {
  constructor(article, articleBody) {
    this.article = article;
    this.articleBody = articleBody;
  }

  getHTML() {
    return `<div id="container"><h2>${this.article.getHeadline()}</h2><br><img src="${this.article.getThumbnail()}" alt="${this.article.getHeadline().slice(0, 15)}"><br>${this.articleBody}</div>`;
  }
}

// This is a better way to visualise the html returned above

// <div id="container">
//   <h2>
//     ${this.article.getHeadline()}
//   </h2>
//   <br>
//   <img src="${this.article.getThumbnail()}" alt="${this.article.getHeadline().slice(0, 15)}">
//   <br>
//   ${this.articleBody}  NB. the response body contains a lot of its own html elements, so I have opted not to add more
// </div>
