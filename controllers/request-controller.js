(function(exports) {
  function RequestController(eventController) {
    this._eventController = eventController;
  }

  RequestController.prototype.requestHeadlines = function () {
    var headlinesRequest = new XMLHttpRequest();
    headlinesRequest.addEventListener("load", eventController.actionOnLoadHeadlines) // actionOnLoadHeadlines
    headlinesRequest.open("GET", "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/uk-news?show-fields=thumbnail");
    headlinesRequest.send();
  };

  RequestController.prototype.requestStory = function () {
    var storyRequest = new XMLHttpRequest();
    storyRequest.addEventListener("load", eventController.actionOnLoadStory) // actionOnLoadStory
    storyRequest.open("GET", `http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/${this._getIdFromURL()}?show-fields=all`);
    storyRequest.send();
  };

  RequestController.prototype._getIdFromURL = function () {
    return window.location.hash.split('/').slice(1).join('/');
  };

  exports.RequestController = RequestController;

})(this);
