function Story(data) {
    this.data = data;
    this.title = this.getTitle();
    this.hotLink = this.data.webUrl;
}

Story.prototype.getTitle = function() {
  var reg = /([^/]*)$/;
  var res = this.data.id.match(reg);
  return res[0];
};
