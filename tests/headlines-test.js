(function testHeadlinesCreatesNewObjec () {
  var headlineMock = {}

  var object = new Object()
  var headlines = new Headlines(headlineMock, [])
  var testName = 'test the creation of a new Headlines object'

  assert.isTrue(typeof object === typeof headlines, testName)
})();

(function testHeadlinesStoringFunction () {
  var testName = 'test storing of headlines from API return'
  function HeadlineMock() {}
  var callReturnMock = [{headline: 'test headline1', shortUrl: 'www.testlink.com', thumbnail: 'www.piclink.com'},
    {headline: 'test headline2', shortUrl: 'www.testlink.com', thumbnail: 'www.piclink.com'}]
  var headlines = new Headlines(callReturnMock, HeadlineMock)
  headlines.storeHeadlines()
  assert.isTrue(true, testName)
  assert.isTrue(headlines.getHeadlines().length === 2,'check length of arrray')
})();
