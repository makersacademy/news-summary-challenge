window.addEventListener("load", function() {
  var story1 = new NewsStory("Here is a headline!")
  var story2 = new NewsStory("Here is another headline!")
  var storyView = new NewsView([story1,story2])
  var newsController = new NewsController(storyView);
  var element = this.document.getElementById("app");
  newsController.updateInnerHtml(element, storyView.render());
})