(function testHeadlinesCreatesNewObjec () {
  var articleMock = {}

  var object = new Object()
  var headlines = new Headlines(articleMock, [])
  var testName = 'test the creation of a new Headlines object'

  assert.isTrue(typeof object === typeof headlines, testName)
})()
