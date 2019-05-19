(function(exports){

  function ArticleListView(articles){
    this.articles = articles;
  };

  ArticleListView.prototype.get_view = function(){
      var self = this;
      var string = "";

     this.articles.getDataFromURL().then(function(value) {
       value.map(function(item){
         var articleTitle = item.webTitle;
         var articleWebUrl = item.webUrl;
         var apiUrl = item.apiUrl;

         self.articles.getSummary(articleWebUrl).then(function(value) {
           string = string + "<li><div>" + `<a href="${articleWebUrl}">` + articleTitle + "</a>" + "<p>"+ value +"<p>"+ "</div></li>";
            var view = "<ul>" + string + "</ul>";
            document.getElementById("app").innerHTML = view
         });
     })
  });
};
exports.ArticleListView = ArticleListView;

})(this);
