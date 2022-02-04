class NewsModel {
  constructor() {
    this.headlines = [];
  }

  getHeadlines() {
    return this.headlines;
  }

  addHeadlines(stories) {
    stories.forEach(story => {
      this.headlines.push(story.webTitle);
    });
  }

  reset() {
    this.headlines = []
  }
 }

module.exports = NewsModel;