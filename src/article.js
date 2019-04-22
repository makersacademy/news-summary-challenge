/* eslint-disable no-undef */
'use strict';

var id = -1;
function nextId() {
  id += 1;
}
class Article {
  static nextId() {
    id += 1;
  }
  constructor(text, image, url) {
    nextId();
    this.id = id;
    this.text = text; //change this to title
    this.image = image;
    this.url = url; //test this
  }

  getText() {
    return this.text;
  }

  getImage() {
    return this.image;
  }

  getId() {
    return this.id;
  }
}

// module.exports = Article;

export default Article;
