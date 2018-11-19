export default class NewsArticle {
  constructor(headline, url, imageUrl, id) {
    this.headline = headline;
    this.url = url;
    this.imageUrl = imageUrl;
    this.id = id;
    this.sentences = null;
  }

  getSummaryView() {
    return `<h3>${this.headline}</h3><img src="${this.imageUrl}"><p>${this.sentences.join(' ')}</p><a class="guardian-link" href="${this.url}">The Guardian</a>`;
  }
}
