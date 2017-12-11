(function(exports){
  function ArticleListView(articleList = new ArticleList){
    this._articleList = articleList
    this._list = articleList.list();
    this._result = '';
  }
  function renderToHtml(article){
    var content = imgHtml(article)+titleHtml(article)+summaryHtml(article)
    return `<div id="${article.id()}">${content}</div></a>`
  }

  function titleHtml(article){
    return `<a href="#article/${article.id()}"><div class="title">${article.title()}</div></a>`
  }
  function imgHtml(article){
    return `<div class="image">${article.img()}</div>`
  }

  function summaryHtml(article){
    return `<div class="summary">${article.summary()}</div>`
  }

  ArticleListView.prototype.convert = function(){
    var self = this;
    this._list.forEach(function(article){self._result+= renderToHtml(article)})

  }

  ArticleListView.prototype.toHtml = function(){
    return this._result;
  }

  ArticleListView.prototype.addArticle = function(data, body){
    this._articleList.add(data, body);
    this._result = '';
    this.convert();
  }



  exports.ArticleListView = ArticleListView;
})(this)
