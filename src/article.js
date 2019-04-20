'use strict';

class Article {
  constructor(text, image) {
    this.text = text;
    this.image = image;
  }

  getText() {
    return this.text;
  }

  getImage() {
    return this.image;
  }
}
module.exports = Article;
