'use strict';

class Story {
  constructor(headline, url, thumbnail, standfirst, body, index) {
    this.headline = headline;
    this.url = url;
    this.thumbnail = thumbnail;
    this.standfirst = standfirst;
    this.body = body;
    this.index = index;
  }

  displayStoryList() {
    let headline = `<h2><a href="#${this.index}">${this.headline}</a></h2>`;
    let pic = `<a href="#${this.index}"><img src="${this.thumbnail}"></a>`;
    let sf = `<p>${this.standfirst}</p>`;

    return headline + pic + sf + `</br>`
  }

  displayStory() {
    return `<p>${this.body}</p>`;
  }
}
