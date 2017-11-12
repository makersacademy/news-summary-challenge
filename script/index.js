window.addEventListener("load", function() {
  var element = document.getElementById("news-list");
  new NewsControllerModel(NewsListModel, NewsListViewModel, element);
});
