(function testOutputOfRenderFunction () {
  var testName = 'test output of render function'
  var headlines = [{getPicLink: function () {return 'www.piclink.com'},
    getHeadline: function () {return 'test head line'},
    getId: function () {return 1},
    getLink: function () {return 'www.linktoarticle.com'}
  }]
  var headlinesView = new HeadlinesView(headlines)
  var render = `<ul><img src="www.piclink.com"><br><a href="www.linktoarticle.com">test head line</a><br><br></ul>`
  assert.isTrue(headlinesView.returnHTML() === render, testName)
})();
