function render(articlelist) {

  var content = document.getElementById('content');
  var articlelistview = new ArticleListView(articlelist);
  content.innerHTML = articlelistview.htmlStringify();

  window.addEventListener("hashchange", function(){
    showSummary(articlelist);
  });

  function showArticle() {
    var articleID = window.location.hash.split('/')[1];
    var article = articlelist._articles[articleID-1];
    var articleview = new ArticleView(article);
    document.getElementById("content").innerHTML = articleview.htmlStringify();
    document.getElementById("back").addEventListener("click", function() {
      window.location.href = "http://localhost:8080/";
    });
  };

  function showSummary() {
    var articleID = window.location.hash.split('/')[1];
    var article = articlelist._articles[articleID-1];
    fetch(`http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=` + article._url)
    .then((resp) => resp.json())
    .then(function(data) {
      document.getElementById("content").innerHTML = `<div><h2>` + article.headline() + `</h2><button type="button" id="back">Back</button><br><img src="` + article.image() + `"><p>` + data.text + `</div>`;
      document.getElementById("back").addEventListener("click", function() {
        window.location.href = "http://localhost:8080/";
      });
    })
  };

}
