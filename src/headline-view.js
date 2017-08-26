(function(exports) {
  function HeadlineView(headlineList) {
    this.headlineList = headlineList;
  }

HeadlineView.prototype.toHtml = function() {
  var htmlString = "<ul>";
  this.headlineList.getList().forEach(function(headline) {
    htmlString += "<li><div>" + headline + "</div></li>";
  })
  htmlString += "</ul>";
  return htmlString;
};

  exports.HeadlineView = HeadlineView;
})(this);
