(function(exports){
  var View = function(list){
    this.list = list;
  }

  View.prototype.displayHeadlines = function() {
    return "<ul>" +

    this.list.returnAllStories().map( story => "<li id=\"" + story.id + "\"><img src=\"" + story.thumbnail + "\"></br></br><a href=\"#\" onclick=\"readStory(" + story.id + ")\">" + story.getTitle() + "</a></li></br></br>").join("") + "</ul>"


  }


  exports.View = View;
})(this);
