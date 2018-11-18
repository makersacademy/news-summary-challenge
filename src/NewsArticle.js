export default class NewsArticle {
  constructor(headline, url, id) {
    this.headline = headline;
    this.url = url;
    this.id = id;
    this.sentences = null;
  }

  getSummaryView() {
    return `<h3>${this.headline}</h3><p>${this.sentences.join(' ')}</p><a class="guardian-link" href="${this.url}">The Guardian</a>`;
  }
}
