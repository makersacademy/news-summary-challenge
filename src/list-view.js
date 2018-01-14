(function(exports){
  var View = function(list){
    this.list = list;
  }

  View.prototype.displayHeadlines = function() {
    return "<ul>" +

    this.list.returnAllStories().map( story => "<li id='" + story.id + "'><a onclick='readStory(" + story.id + ", 0)'>" + story.getTitle() + "</a></li>").join("") + "</ul>"


  }


  exports.View = View;
})(this);
