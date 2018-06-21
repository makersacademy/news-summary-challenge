function Headlines() {
  this.headlinesArray = []
}

var testHeadline = "Test Headline: Bacon is Good For You!"

Headlines.prototype.addHeadline = function () {
  this.headlinesArray.push(testHeadline)
}
