(function(exports){

  function ArticleController(articleListView = new ArticleListView , singleArticleView = new SingleArticleView){
    this._articleListView = articleListView;
    this._singleArticleView = singleArticleView;
  }


  ArticleController.prototype = {
    getElementOf: function(id){ return document.getElementById(id).innerHTML;},

    changeContent: function(content){
      document
      .getElementById('app')
      .innerHTML = content;},

    guardianRequest: function(link){
      var self = this
     var request = new XMLHttpRequest();
     request.open('GET', link);
     request.onload = function (){
       var data = JSON.parse(request.responseText).response.results;
       data.forEach(function(article){ self.aylienRequest(article, aylien.request(article.webUrl),  function(){self.loadData(); self.hashChange()})});
       }
     request.send();
   },

   aylienRequest: function(data, link,callBack){
     var self = this;
     var request = new XMLHttpRequest();
     request.open('GET', link);
     request.onload = function (){
       var body = JSON.parse(request.responseText);
        self._articleListView.addArticle(data, body)
        callBack();
       }
     request.send();
   },

    guardian: function(){
      this.guardianRequest(guardian.request)},

    loadData: function(){
      var self = this;
      document
      .getElementById('app')
      .innerHTML = self._articleListView.toHtml();
      self.hashChange();
    },

    hashChange: function() {
      var self = this;
      var content = this._articleListView._list;
      function showArticleForCurrentPage() {
        var article = self._singleArticleView.creat(content[index(window.location)]);
      self.changeContent(self._singleArticleView.renderHtml());
      };

      function index(location) {
        return parseInt(location.hash.split("/")[1])-1;
      };

      window.addEventListener("hashchange", showArticleForCurrentPage)

    }
  }


  exports.ArticleController = ArticleController;
})(this)
c = new ArticleController()
c.guardian();
