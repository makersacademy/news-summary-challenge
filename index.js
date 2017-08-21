(function() {
  var storyListViewModel = StoryListView;
  var storyModel = Story;
  var storyViewModel = StoryView;
  var storyGrabberModel = StoryGrabber;
  var storyList = new StoryList(storyModel);
  var element = document.getElementById("app");
  var xhttp = new XMLHttpRequest();
  var storycontroller = new StoryController(element, storyList, storyViewModel, storyListViewModel, storyGrabberModel, xhttp);
  storycontroller.grabStories();
})();
