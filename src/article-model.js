class Article {
  constructor(title, link, thumbnail, time) {
    this.title = title;
    this.link = link;
    this.thumbnail = thumbnail
    this.time = time;
  }

  getHTML() {
    let html = `<div class="article">`;
    html += `<h1 class="title">${this.title}</h1>`;
    let date = new Date(Date.parse(this.date));
    html += `<h2 class="date">${date.toLocaleDateString()}</h2>`;
    html += `<img src="${this.thumbnail}" class="thumbnail">`
    html += `<a href="${this.link}">Full article</a>`;
    html += `</div>`;

    return html;
  }
}
