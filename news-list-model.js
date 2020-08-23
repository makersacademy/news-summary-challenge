(function(exports){
  function NewsListModel() {
    this.list = [];
  };

    NewsListModel.prototype = (function(){
      function addArticle(newsArticle) {
        this.list.push(newsArticle)
      }

    return {
      addArticle
    };
    })();
    
    exports.NewsListModel = NewsListModel;
})(this);





