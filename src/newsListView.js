(function(context) {

  function NewsListView(noteList) {
    this._noteList = noteList;
  }

  NewsListView.prototype.toHTML = function() {
    return '<p><img class="" src="images/brexit.jpeg"></p><h1 class="headline">Brexit Cancelled</h1>';
  }

  context.NewsListView = NewsListView;
})(this);