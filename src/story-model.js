'use strict';

class Story {
  constructor(headline, url, thumbnail) {
    this.headline = headline;
    this.url = url;
    this.thumbnail = thumbnail;
  }

  displayStory() {
    let headline = `<h4><a href="${this.url}">${this.headline}</a></h4>`;
    let pic = `<a href="${this.url}"><img src="${this.thumbnail}"></a>`

    return `<br>` + headline + pic + `</br>`
  }
}
