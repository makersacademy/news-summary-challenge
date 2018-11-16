describe("change URL When Story Selected", function() {
  it("listens for a hash change event", function() {
    var story = new Story("Great news story", "It's great.");
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


    var window = {
      location: {
        hash: '#0'
      }
    }

    controller.updateText();
    expect(window.location.hash).toEqual('#0');
    expect(document.getElementById('headline').innerHTML).toEqual('<ul><li><div id="0"><a href="#0">Great news story</a></div></li></ul>')
  })
})
