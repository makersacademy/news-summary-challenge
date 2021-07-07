(function(exports) {

  function NewsListView(newsList) {
    this.newsList = newsList;
  };

  NewsListView.prototype.returnHTML = function () {
    var listHTML = `<ul>`
    var newsListObject = this.newsList
    for (var i = 0; i < newsListObject.length; i++) {
      listHTML += `<li><div><a>${newsListObject[i].webTitle}</a></div></li>`;
    }
    listHTML += `</ul>`
    return listHTML
  };

  exports.NewsListView = NewsListView;
})(this);
