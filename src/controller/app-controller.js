(function(exports) {
  function Controller(articleList) {
    this.articleList = articleList;
  }

  Controller.prototype.getHTML = function() {
    document.addEventListener("DOMContentLoaded", function(){
      articleView = new ArticleListView(articleList);

      console.log(articleView.articleObjectsToView);

      document.getElementById('app').innerHTML = articleView.singleHTMLString();
    });
  }

  exports.Controller = Controller;

})(this);

articleList = new ArticleList();
hello = articleList.createArticleList();

// Delay on api call mean not coming back in time and program moving on without it

controller = new Controller();
controller.getHTML();
