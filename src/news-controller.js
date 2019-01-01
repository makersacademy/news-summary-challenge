function NewsController(/*newsListView*/) {
  // this.newsListView = newsListView;
}

NewsController.prototype._setup = function() {
  
};

NewsController.prototype.render = function(html) {
  document.getElementById('news').innerHTML = html;
};