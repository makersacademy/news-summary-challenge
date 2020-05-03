function newsItem(apiResponseElement,articleID) {
  this.headline = apiResponseElement.headline;
  this.bodyText = apiResponseElement.bodyText;
  this.shortUrl = apiResponseElement.shortUrl;
  this.thumbnail = apiResponseElement.thumbnail;
  this.id = articleID
}

newsItem.prototype.getHeadlineHTML= function() {
  // var headline = `<a href='${this.shortUrl}' class='headline' id='Article #${this.id} headline'>${this.headline}</a>`;
  var headline = document.createElement('a')
  headline.href = this.shortUrl;
  headline.classList.add('headline');
  headline.id = `Article #${this.id} headline`;
  headline.textContent = this.headline;
  return headline;
};

newsItem.prototype.getbodyTextHTML= function() {
  // var bodyText = `<div id='Article #${this.id} bodytext'>${this.bodyText.substr(0,150)}</div>`;
  var bodyText = document.createElement('p');
  bodyText.id = `Article #${this.id} bodytext`;
  bodyText.classList.add('body')
  bodyText.textContent = this.bodyText.substr(0,200) + '...';
  return bodyText;
};

newsItem.prototype.getThumbnailHTML = function() {
  // var thumbnail = `<img id='Article #${this.id} image' src='${this.thumbnail}'>`;
  var thumbnail = document.createElement('img');
  thumbnail.classList.add('thumbnail')
  thumbnail.id = `Article #${this.id} image`;
  thumbnail.src = this.thumbnail;
  return thumbnail;
}
