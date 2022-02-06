class NewsModel {
  constructor() {
    this.headlines = [];
    this.links = [];
    this.images = [];
  }

  getHeadlines() {
    return this.headlines;
  }

  getLinks() {
    return this.links;
  }

  getImages() {
    return this.images;
  }

  addInfo(stories) {
    this.#addHeadlines(stories);
    this.#addLinks(stories);
    this.#addImages(stories);
  };

  #addHeadlines(stories) {
    stories.forEach(story => {
      this.headlines.push(story.webTitle);
    });
  }

  #addLinks(stories) {
    stories.forEach(story => {
      this.links.push(story.webUrl);
    });
  }

  #addImages(stories) {
    stories.forEach(story => {
      this.images.push(story.fields.thumbnail);
    });
  }

  reset() {
    this.headlines = [];
    this.links = [];
    this.images = [];
  }
 }

module.exports = NewsModel;