(function(exports){

  function SingleArticleView(article){
    this._article = article
  }

  function renderToHtml(article){
    var content = imgHtml(article)+titleHtml(article)+textHtml(article)+urltHtml(article)
    return `<div id="${article.id()}">${content}</div>`
  }

  function titleHtml(article){
    return `<div class="title">${article.title()}</div>`
  }
  function imgHtml(article){
    return `<div class="image">${article.img()}</div>`
  }

  function textHtml(article){
    return `<div class="text">${article.text()}</div>`
  }
  function urltHtml(article){
    return `<div class="url"><a href="${article.webUrl()}">Full article</a></div>`
  }

  SingleArticleView.prototype.creat = function(article){
  this._article = article;
  }

  SingleArticleView.prototype.renderHtml = function(){
    return renderToHtml(this._article);
  }

  exports.SingleArticleView = SingleArticleView;
})(this)
