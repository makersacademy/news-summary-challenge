function Article(url, headline, date) {
  this.url = url;
  this.headline = headline;
  this.date = new Date(date);
}

Article.prototype = {

  getHTML: function(index) {

    var headline = `<div class="article-headline"><h3>${this.headline}</h3></div>`;
    var url = `<div class="article-url"><p><a href="${this.url}">Link to article</a></p></div>`;
    var date = `<div class="article-date"><p>${this.date.toDateString()}</p></div>`;

    return `<div class="article" id="article${index}">` + headline + date + url + `</div>`

  }

}
