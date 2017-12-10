(function(exports){

  function ArticleController(){
    this._element = '';
  }
  ArticleController.prototype = {
    getElementOf: function(id){ this._element = document.getElementById(id);
    return this._element.innerHTML;},
    changeContent: function(content){ this._element.innerHTML = content;}
  }
  exports.ArticleController = ArticleController;
})(this)
