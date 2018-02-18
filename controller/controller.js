function Controller(Headlines) {
  this.content = Headlines
};

Controller.prototype.insertHeadlines = function() {
  document.getElementById('headlineList').innerHTML = this.content.makeHtmlList();
};
