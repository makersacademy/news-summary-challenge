getNews = function() {
  apiHandler.get("http://content.guardianapis.com/uk-news", renderNews);
}
renderNews = function(object){
  webTitles = apiObjectParser(object, "webTitle");
  renderIterable(webTitles, "headline_", "headlines");
}
renderIterable = function(iterable, idPrefix, parentId) {
  parent = document.getElementById(parentId);
  for (var i = 0; i < iterable.length; i++) {
    newDiv = document.createElement('div');
    newDiv.id = idPrefix + i;
    newDiv.innerHTML = iterable[i];
    parent.appendChild(newDiv);
  }
}
