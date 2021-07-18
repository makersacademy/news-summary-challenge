'use strict';

class Headlines {
  constructor() {
    this.topStories = []
  }

  addArticle(webTitle, webUrl, thumbnail) {
    let article = {webTitle: webTitle, webUrl: webUrl, thumbnail: thumbnail};
    let id = this.topStories.length;
    this.topStories.push(article);
    return id;
  }

  getArticle(i) {
    return this.topStories[i];
  }
}