(function(exports){

  var fakeDataSet = [{
    webTitle: "Bournemouth v Arsenal: Premier League – live!",
    webUrl: "https://www.theguardian.com/football/live/2018/jan/14/bournemouth-v-arsenal-premier-league-live"
  }, {
    webTitle: "Letter: Peter Preston and the Journalist Network",
    webUrl: "https://www.theguardian.com/media/2018/jan/14/peter-preston-obituary-letter"
  }];

  function testConvertDataToHtmlString() {
    var converter = new ViewAllStories(fakeDataSet);
    assert.isTrue(converter.convertDataToHtml() === "<ul><li><h3>Bournemouth v Arsenal: Premier League – live!</h3><a>https://www.theguardian.com/football/live/2018/jan/14/bournemouth-v-arsenal-premier-league-live</a></li><li><h3>Letter: Peter Preston and the Journalist Network</h3><a>https://www.theguardian.com/media/2018/jan/14/peter-preston-obituary-letter</a></li></ul>");
  }

  exports.testConvertDataToHtmlString = testConvertDataToHtmlString;
})(this);
