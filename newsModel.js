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
}

module.exports = NewsModel