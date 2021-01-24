class Article {
  constructor(headline, imageURL, story) {
    this.headline = headline
    this.imageURL = imageURL
    this.story = story
  }

  getHeadline() {
    return this.headline
  }

  getImageURL() {
    return this.imageURL
  }

  getStory() {
    return this.story
  }
};
