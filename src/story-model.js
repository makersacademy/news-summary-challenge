'use strict';

class Story {
  constructor(headline, url, thumbnail, standfirst) {
    this.headline = headline;
    this.url = url;
    this.thumbnail = thumbnail;
    this.standfirst = standfirst;
  }

  displayStoryList() {
    let headline = `<h2><a href="${this.url}">${this.headline}</a></h2>`;
    let pic = `<a href="${this.url}"><img src="${this.thumbnail}"></a>`;
    let sf = `<p>${this.standfirst}</p>`;

    return headline + pic + sf + `</br>`
  }

  displayStory() {
    return `<p>${this.text}</p>`;
  }
}
