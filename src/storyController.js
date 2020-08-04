(function(exports) { 
  
  function StoryController(list) {
    this.storyList = list;
    this.storyListView = new StoryListView(list);
  }

  StoryController.prototype.outputToHtml = function() {
    document.getElementById("app").innerHTML = this.storyListView.viewHeadlines();
  }

  exports.StoryController = StoryController
})(this)

var list = new StoryList();
list.getStories()
var controller = new StoryController(list);
window.onload = controller.outputToHtml()
  