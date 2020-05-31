'use strict';

class News {

  constructor(newsBody) {
    this.newsBody = newsBody
  }

  preview() {
    return this.newsBody.substring(0,40) + '...'
  }

}
