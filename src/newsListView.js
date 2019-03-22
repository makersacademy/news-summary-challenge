(function(context) {

  function NewsListView(noteList) {
    this._noteList = noteList;
  }

  NewsListView.prototype.toHTML = function() {
    return '<h1 class="headline">Brexit Cancelled</h1><p><img class="" src="images/brexit.jpeg"></p><p class="detail">Theresa May has given-up. Rejoice!</p>';
  }

  context.NewsListView = NewsListView;
})(this);