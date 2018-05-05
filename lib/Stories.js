function Story(data) {
    this.data = data;
    this.title = this.getTitle();
}

Story.prototype.getTitle = function() {
  var reg = /([^/]*)$/;
  var res = this.data.id.match(reg);
  return res[0];
};

