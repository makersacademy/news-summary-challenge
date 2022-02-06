class NewsModel {
  constructor() {
    this.titles = [];
  }

  addTitles(titles) {
    
    titles.forEach(article => {
      this.titles.push(article.webTitle)
    });
  }

  showTitles() {
    return this.titles;
  }
}

module.exports = NewsModel;
