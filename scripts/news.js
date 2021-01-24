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

  createModalTitle() {
    return `<h2><a href="${this.url}">${this.title}</a></h2>`
  }

  createSummary() {
    return `<p>${this.summary}</p>`
  }

  createModal() {
    return `<div class="modal">
              <span class="btn-close">&times;</span>
                <div class="modal-content">
                  ${this.createModalTitle()}
                  ${this.createThumbnail()} 
                  ${this.createSummary()}
                </div>
            </div>`
  }
}