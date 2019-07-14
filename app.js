window.addEventListener("load", function() {
  var newsController = new NewsController();
  var element = this.document.getElementById("app");
  newsController.updateInnerHtml(element, "The News!");
})