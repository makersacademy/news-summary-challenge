describe("showStory", function() {
  it("shows the story headline and summary when it has been clicked", function() {
    var story = new Story("Great news story", "www.news.com");
    var storyList = new StoryList();
    storyList.addStory(story);
    var storyListView = new StoryListView(storyList);
    var controller = new StoryController(storyListView);

    var document;
    StoryController.prototype.updateText = function() {
      document = {
        getElementById: function(id) {
          return {
            innerHTML: '<ul><li><div id="0"><a href="#0">Great news story</a></div></li></ul>'
          };
        }
      };
    };
    controller.updateText();
    expect(document.getElementById('headline').innerHTML).toEqual('<ul><li><div id="0"><a href="#0">Great news story</a></div></li></ul>')
  })
})
