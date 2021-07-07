(function (exports) {
  function HeadlinesListView(headlinesList) {
    this.list = headlinesList;
  }

  HeadlinesListView.prototype.addHTMLTags = function () {
    let string = '<div><ul>';
    this.list.returnHeadlines().forEach((item) => {
      string += `<li><a id="${item.id}" href="#headlines/${item.id}"><h3>` + item.title + `</h3></a><p>Follow this <span><a href="${item.url}l">link</a></span> to find out more.</p></li>`;
    });
    string += '</ul></div>';

    return string;
  };

  exports.HeadlinesListView = HeadlinesListView;
})(this);
