(function(context) {

  function NewsListView(noteList) {
    this._noteList = noteList;
  }

  NewsListView.prototype.toHTML = function() {
    return '<div class="newItem"><p><img class="" src="images/brexit.jpeg"></p><h1 class="headline">Brexit Cancelled</h1></div>';
  }

  context.NewsListView = NewsListView;
})(this);