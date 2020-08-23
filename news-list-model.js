(function(exports){
  
  
  function NewsListModel() {
    this.list = [];
  };

    NewsListModel.prototype = (function(){
      function addArticle(newsArticle) {
        this.list.push(newsArticle)
      };

      function requestArticle (){
        return (this.list)
      } 

    return {
      addArticle,
      requestArticle
    };
    })();
    
    exports.NewsListModel = NewsListModel;
})(this);





