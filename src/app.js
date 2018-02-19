(function app() {
  var controller = new NewsController;
  var templater =  new ArticleTemplate;

  function displayNews() {
   newspaper.articleList.forEach(function(article) {
     var html = templater.createLink(article);
     document.getElementById('headlines').innerHTML += html;
   });
  }

  controller.callAPI(displayNews);

}());
