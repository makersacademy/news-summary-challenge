/* eslint-disable no-undef */
'use strict';

var id = 0;
function nextId() {
  id += 1;
}
class Article {
  static nextId() {
    id += 1;
  }
  constructor(text, image) {
    nextId();
    this.id = id;
    this.text = text;
    this.image = image;
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
module.exports = Article;
('node test/*.js');
