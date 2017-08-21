(function(exports){
   function ArticleList(article){
     this.list = [];
     this.article = article;
   }

   ArticleList.prototype = {
    createArticle: function(title, url, date, thumbnail) {
      var article = new this.article(title, url, date, thumbnail);
      this.list.push(article);
    },
    displayList: function() {
      return this.list;
    },
   };
  exports.ArticleList = ArticleList;
})(this);
