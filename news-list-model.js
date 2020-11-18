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

      function AddPlusRequest(headline, url, picture){
        var articleslist = new List(headline, url, picture)
        this.list
      }

    return {
      addArticle,
      requestArticle
    };
    })();
    
    exports.NewsListModel = NewsListModel;
})(this);





