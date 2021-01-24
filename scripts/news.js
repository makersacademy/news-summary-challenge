class News {
  constructor(title, url, thumbnail, summary, sectionName) {
    this.title = title;
    this.url = url;
    this.thumbnail = thumbnail;
    this.summary = summary;
    this.sectionName = sectionName
  }

  createTitle() {
    return `<h2 class="trigger"><span class="section">${this.sectionName}</span> ${this.title}</h2>`
  }
  createThumbnail() {
    return `<img src="${this.thumbnail}" class="thumbnail"></img>`
  }
}