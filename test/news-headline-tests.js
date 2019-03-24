(function(exports){
  function testIfNewsHeadlineIsCreatedCorrectly(){
    var headline = new NewsHeadline(1, "A web title for headline", "an api url")
    assert.isTrue(headline.id === 1)
    assert.isTrue(headline.webTitle === "A web title for headline")
    assert.isTrue(headline.apiUrl === "an api url")
  }
  testIfNewsHeadlineIsCreatedCorrectly();
})(this)
