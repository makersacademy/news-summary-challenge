(function(exports) {
  function EventController(headlineElement, storyElement) {
    this._headlineElement = headlineElement;
    this._storyElement = storyElement;
  }

  EventController.prototype.actionOnLoadPage = function (requestController) {
    requestController.requestHeadlines();
    window.addEventListener("hashchange", this.actionOnHashChange);
  };

  EventController.prototype.actionOnLoadHeadlines = function () {
    var headlines = new Headlines(JSON.parse(this.responseText).response.results); // Bind this
    var headlinesView = new HeadlinesView(headlines);
    var headlinesController = new HeadlinesController(headlinesView, this._headlineElement) // Don't bind this
    headlinesController.insertHTML();
  };

  EventController.prototype.actionOnLoadStory = function () {
    var story = new Story(JSON.parse(this.response).response.content); // Bind this
    var storyView = new StoryView(story);
    var storyController = new StoryController(storyView, this._storyElement); // Don't bind this
    storyController.insertHTML();
  };

  EventController.prototype.actionOnHashChange = function (requestController) {
     requestController.requestStory();
  };

  exports.EventController = EventController;

})(this);
