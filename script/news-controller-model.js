(function(exports) {
  function NewsControllerModel (NewsListModel, NewsListViewModel, element) {
    var self = this;
    this._newsList = new NewsListModel(NewsStoryModel);
    this._newsListView = new NewsListViewModel(this._newsList);
    this._holderElement = element;
    self.initialSetup();
  }

  NewsControllerModel.prototype.initialSetup = function () {
    var self = this;
    this.renderHTML(this.getHolderElement());
    var headlineElements = this.getNewsList().getNewsStories().map(function(story, index) {
      return document.getElementById("headline" + index);
    });

    headlineElements.forEach(function(headlineElement) {
      headlineElement.addEventListener("click", function(event) {
        event.preventDefault();
        self.renderSingleStory(headlineElement.id.slice(-1), document.getElementById("news-list"));
        document.getElementById("back").addEventListener("click", function(event) {
          event.preventDefault();
          self.initialSetup();
        });
      });
    });
  };

  NewsControllerModel.prototype.getHolderElement = function () {
    return this._holderElement;
  };

  NewsControllerModel.prototype.getNewsList = function () {
    return this._newsList;
  };

  NewsControllerModel.prototype.getNewsListView = function () {
    return this._newsListView;
  };

  NewsControllerModel.prototype.renderHTML = function (element) {
    element.innerHTML = this.getNewsListView().toHTML();
  };

  NewsControllerModel.prototype.renderSingleStory = function (id, element) {
    element.innerHTML = this.getNewsListView().singleStoryHTML(id);
  };

  exports.NewsControllerModel = NewsControllerModel;
}(this));
