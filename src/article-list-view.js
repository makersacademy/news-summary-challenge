(function(exports){
  function ArticleListView(articleList=[]){
    this._list = articleList;
    this._result = ''
  }
  function renderToHtml(article){
    var content = imgHtml(article)+titleHtml(article)+summaryHtml(article)
    return `<a href="#article/${article.id()}"><div id="${article.id()}">${content}</div></a>`
  }

  function titleHtml(article){
    return `<div class="title">${article.title()}</div>`
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



  exports.ArticleListView = ArticleListView;
})(this)
