export default class NewsArticle {
  constructor(headline, url, id) {
    this.headline = headline;
    this.url = url;
    this.id = id;
    this.sentences = null;
  }

  getSummaryView() {
    return `<p>${this.sentences.join(' ')}</p>`;
  }
}
