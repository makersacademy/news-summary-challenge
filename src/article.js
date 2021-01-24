class Article {
  constructor(headline, imageURL, story, articleURL) {
    this.headline = headline
    this.imageURL = imageURL
    this.story = story
    this.articleURL = articleURL
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

  getArticleURL() {
    return this.articleURL
  }
};
