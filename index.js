(function() {
  var storyListViewModel = StoryListView;
  var storyModel = Story;
  var storyViewModel = StoryView;
  var storyList = new StoryList(storyModel);
  storyList.create("Text", "Theresa May", "https://i.guim.co.uk/img/media/8f7aaa9699836511550ecbc75dc8cfaf48e6c85e/0_50_3500_2101/master/3500.jpg?w=700&q=20&auto=format&usm=12&fit=max&dpr=2&s=6f5e1e2c761eeeafb00a45979aaa867c");
  storyList.create("Text", "Something Else", "https://i.guim.co.uk/img/media/8f7aaa9699836511550ecbc75dc8cfaf48e6c85e/0_50_3500_2101/master/3500.jpg?w=700&q=20&auto=format&usm=12&fit=max&dpr=2&s=6f5e1e2c761eeeafb00a45979aaa867c");
  var element = document.getElementById("app");
  var storycontroller = new StoryController(element, storyList, storyViewModel, storyListViewModel);
  storycontroller.display();
})();
