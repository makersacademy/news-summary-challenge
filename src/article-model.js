class Article {
  static id = 1

  constructor(title, link, thumbnail, time, body) {
    this.title = title;
    this.link = link;
    this.thumbnail = thumbnail
    this.time = time;
    this.body = body;
    this.id = Article.id;
    Article.id++;
  }

  getListHTML() {
    let html = `<div class="article">`;
    html += `<h2 class="title">${this.title}</h2>`;
    let date = new Date(Date.parse(this.time));
    html += `<h3 class="date">${date.toLocaleDateString()}</h3>`;
    html += `<img src="${this.thumbnail}" class="thumbnail">`
    html += `<div class="article-link"><a href="#${this.id}">Full article</a></div>`;
    html += `</div>`;

    return html;
  }

  getPageHTML() {
    let html = `<div class="article">`;
    html += `<h2 class="title">${this.title}</h2>`;
    let date = new Date(Date.parse(this.time));
    html += `<h3 class="date">${date.toLocaleDateString()}</h3>`;
    html += `<img src="${this.thumbnail}" class="thumbnail">`
    html += `<p>${this.body}"</p>`
    html += `<div class="article-link"><a href="${this.link}">Read on The Guardian</a></div>`;
    html += `<div class="back-link"><a href="/">Back to Articles</a>`
    html += `</div>`;

    return html;
  }
}
