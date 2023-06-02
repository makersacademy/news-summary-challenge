class NewsModel {
  constructor() {
    this.stories = [];
  }

  getStories() {
    return this.stories;
  }

  setStories(storiesArray) {
    this.stories = storiesArray;
  }
}

module.exports = NewsModel;
