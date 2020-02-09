(function(exports){

    function ArticleController(articleListView, doc = document){
      this.articleListView = articleListView;
      this.doc = doc;
    }

    ArticleController.prototype.insert = function(divId = 'app'){
      var message = this.articleListView.htmlIfy();
      var element = this.doc.getElementById(divId);
      element.innerHTML = message;

    }

    exports.ArticleController = ArticleController;

})(this);