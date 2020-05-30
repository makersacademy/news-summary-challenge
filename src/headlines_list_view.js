(function (exports) {
  function HeadlinesListView(headlinesList) {
    this.list = headlinesList;
  }

  HeadlinesListView.prototype.addHTMLTags = function () {
    string = '<div><ul>';
    this.list.returnHeadlines().forEach((item) => {
      string += '<li>' + item.webTitle + '</li>';
    });
    string += '</ul></div>';

    return string;
  };

  exports.HeadlinesListView = HeadlinesListView;
})(this);
