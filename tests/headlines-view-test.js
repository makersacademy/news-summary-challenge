(function testOutputOfRenderFunction () {
  var testName = 'test output of render function'
  var headlines = [{getPicLink: function () {return 'www.piclink.com'},
    getHeadline: function () {return 'test head line'},
    getId: function () {return 1}
  }]
  var headlinesView = new HeadlinesView(headlines)
  var render = `<ul><li><img src="www.piclink.com"><a href="#1">test head line</a></li></ul>`

  assert.isTrue(headlinesView.render() === render, testName)
})();
