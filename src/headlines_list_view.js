(function (exports) {
  function HeadlinesListView(headlinesList) {
    this.list = headlinesList;
  }

  HeadlinesListView.prototype.addHTMLTags = function () {
    let string = '<div><ul>';
    this.list.returnHeadlines().forEach((item) => {
      string += '<li>' + item.title + '</li>';
    });
    string += '</ul></div>';

    return string;
  };

  exports.HeadlinesListView = HeadlinesListView;
})(this);
