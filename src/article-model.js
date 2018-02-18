function Article(url, headline, date, summary = 'blah') {
  this.url = url;
  this.headline = headline;
  this.date = new Date(date);
  this.textSummary = summary;
}

Article.prototype = {

  getHTML: function(index) {

    var headline = `<div class="article-headline"><h3>${this.headline}</h3></div>`;
    var url = `<div class="article-url">${this.url}</div>`;
    var date = `<div class="article-date"><p>${this.date.toDateString()}</p></div>`;
    var summary = `<div class="article-date"><p>${this.textSummary}</p></div>`;

    return `<div class="article" id="article${index}">` + url + headline + date + summary + `</div>`

  }

}
