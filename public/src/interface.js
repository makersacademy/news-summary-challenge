window.onload = (function () {
 
  var list = new ArticleList
  list.createArticle("The cats", "www.cats.com", "Pets")
  list.createArticle("The dogs", "www.dogs.com", "World News")
  var controller = new ArticleController(list)

  controller.outputHtml()

  controller.dateTime()

});
