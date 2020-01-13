function HeadlineListView(list = new HeadlineList()) {
  this.list = list;
}

HeadlineListView.prototype.returnList = function() {
  return this.list.returnList()
}

HeadlineListView.prototype.add = function(headline) {
  this.list.add(headline);
}