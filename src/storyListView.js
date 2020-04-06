(function(exports) {
  function StoryListView(list) {
    this.list = list
    this.init
  }

  StoryListView.prototype.viewHeadlines = function() {
    var headlines = new Array();
    for (i=0; i < (this.list.stories).length; i++) {
      headlines.push(this.list.stories[i].headline)
    }
    return "<ul><li><div>" + (headlines.join("</div></li><li><div>")) + "</div></li></ul>";
  }

  exports.StoryListView = StoryListView
})(this)