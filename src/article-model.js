function Article(url, headline, summary) {
  this.url = url;
  this.headline = headline;
  this.summary = summary;
}

Article.prototype = {

  getHTML: function(index) {
  
    var headline = `<div class="article-headline">${article.headline}</div>`;
    var url = `<div class="article-url">${article.url}</div>`;
    var summary = `<div class="article-summary">${article.summary}</div>`;

    return `<div class="article" id="article${index}">` + url + headline + summary + `</div>`

  }

}