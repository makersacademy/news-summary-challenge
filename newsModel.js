class NewsModel {
  constructor() {
    this.headlines = [];
    this.links = [];
  }

  getHeadlines() {
    return this.headlines;
  }

  getLinks() {
    return this.links;
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