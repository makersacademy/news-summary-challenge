window.onload = (function () {
 

  var list = new ArticleList
  var controller = new ArticleController(list)

  controller.dateTime()

  
});


// window.onload = (function() { myfuncname() });