(function (exports) {
  function HeadlinesListView(headlinesList) {
    this.list = headlinesList;
  }

  HeadlinesListView.prototype.addHTMLTags = function () {
    let string = '<div><ul>';
    this.list.returnHeadlines().forEach((item) => {
      string += `<li><h3><a href="#headlines/${item.id}">` + item.title + `</a></h3><p>Follow this <span><a href="${item.url}l">link</a></span> to find out more.</p></li>`;
    });
    string += '</ul></div>';
    console.log('View: ' + string);
    return string;
  };

  exports.HeadlinesListView = HeadlinesListView;
})(this);
