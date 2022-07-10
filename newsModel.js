class NewsModel {
  constructor() {
    this.headlines = []
  }
  addHeadline(headline) { 
    this.headlines.push(headline)
  }

  getHeadlines() {
    return this.headlines
  }

  setHeadlines(headlines) {
    headlines.forEach(headline => this.headlines.push(headline.fields.headline));
  }
}

module.exports = NewsModel