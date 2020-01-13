function HeadlineListView(list = new HeadlineList()) {
  this.list = list;
}

HeadlineListView.prototype.returnList = function() {
  return this.list.returnList()
}

HeadlineListView.prototype.add = function(headline, url) {
  this.list.add(headline, url);
}

HeadlineListView.prototype.getHTML = function() {
  var htmlString = "<ul>"
  this.returnList().forEach(headline => {
    htmlString += `<li><a href="${headline.url}">${headline.title}</a></li>`
  });
  return htmlString + "</ul>"
}