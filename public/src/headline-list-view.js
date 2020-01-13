function HeadlineListView(list = new HeadlineList()) {
  this.list = list;
}

HeadlineListView.prototype.returnList = function() {
  return this.list.returnList()
}

HeadlineListView.prototype.add = function(headline) {
  this.list.add(headline);
}

HeadlineListView.prototype.getHTML = function() {
  var htmlString = "<ul>"
  this.returnList().forEach(headline => {
    htmlString += `<li>${headline}</li>`
  });
  return htmlString + "</ul>"
}