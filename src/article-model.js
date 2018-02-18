function Article(url, headline, date) {
  this.url = url;
  this.headline = headline;
  this.date = date;
}

Article.prototype = {

  getHTML: function(index) {
  
    var headline = `<div class="article-headline"><h3>${this.headline}</h3></div>`;
    var url = `<div class="article-url">${this.url}</div>`;
    var date = `<div class="article-date">${this.date}</div>`;

    return `<div class="article" id="article${index}">` + url + headline + date + `</div>`

  }

}