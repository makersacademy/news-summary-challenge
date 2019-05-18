function changePage(page) {
  var element = document.getElementById("app");
  page = " "
  element.innerHTML = page
}

function ArticleController(articlelist, articleview) {
    this.articlelist = articlelist;
    this.articleview = articleview;
};

ArticleController.prototype.updateDOM = function(){
  return document.getElementById('app').innerHTML = this.articleview.display()
};
