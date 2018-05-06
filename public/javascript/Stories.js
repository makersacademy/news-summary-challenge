function Story(data) {
  this.data = data;
  this.title = this.removeHyphens(this.getTitle());
  this.hotLink = this.data.webUrl;
}

Story.prototype.getTitle = function() {
  var reg = /([^/]*)$/;
  var res = this.data.id.match(reg);
  return res[0];
};

Story.prototype.removeHyphens = function(str) {
  return str.replace(/-/g, ' ');
};

Story.prototype.getSummary = function(body) {
  return body.slice(0, 100);
};