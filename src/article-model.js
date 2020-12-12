class Article {
  constructor(title, link, thumbnail, time) {
    this.title = title;
    this.link = link;
    this.thumbnail = thumbnail
    this.time = time;
  }

  getHTML() {
    let html = `<div class="article">`;
    html += `<h2 class="title">${this.title}</h2>`;
    let date = new Date(Date.parse(this.time));
    html += `<h3 class="date">${date.toLocaleDateString()}</h3>`;
    html += `<img src="${this.thumbnail}" class="thumbnail">`
    html += `<div class="article-link"><a href="${this.link}">Full article</a></div>`;
    html += `</div>`;

    return html;
  }
}
