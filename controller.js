const Controller = function(headlines) {
  this.headlines = headlines
}

Controller.prototype.printHeadlines = function () {
  var heads = this.headlines.getHeadlines()
  return heads
};
