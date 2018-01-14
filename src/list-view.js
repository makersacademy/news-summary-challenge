(function(exports){
  var View = function(list){
    this.list = list;
  }

  View.prototype.displayHeadlines = function() {
    return "<ul>" +

    this.list.returnAllStories().map( story => "<li id=\"" + story.id + "\"><a href=\"#\" onclick=\"readStory(" + story.id + ")\">" + story.getTitle() + "</a></li>").join("") + "</ul>"


  }


  exports.View = View;
})(this);
