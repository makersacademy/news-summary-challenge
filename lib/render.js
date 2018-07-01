function render(articlelist) {

  var headlines = document.getElementById('content');
  var articlelistview = new ArticleListView(articlelist);
  headlines.innerHTML = articlelistview.htmlStringify();

  window.addEventListener("hashchange", function(){
    showArticle(articlelist);
  });

  function showArticle() {
    var articleID = window.location.hash.split('/')[1];
    var article = articlelist._articles[articleID-1];
    var articleview = new ArticleView(article);
    document.getElementById("content").innerHTML = articleview.htmlStringify();
    document.getElementById("back").addEventListener("click", function() {
      headlines.innerHTML = articlelistview.htmlStringify();
      window.location.href = "http://localhost:8080/";
    });

  };

}
