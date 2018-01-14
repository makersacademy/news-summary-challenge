(function(exports){

  fakeDataSet = [{
    webTitle: "Bournemouth v Arsenal: Premier League – live!",
    webUrl: "https://www.theguardian.com/football/live/2018/jan/14/bournemouth-v-arsenal-premier-league-live"
  }, {
    webTitle: "Letter: Peter Preston and the Journalist Network",
    webUrl: "https://www.theguardian.com/media/2018/jan/14/peter-preston-obituary-letter"
  }];

  function testPrintHtml(){
    printer(fakeDataSet);
    assert.isTrue(document.getElementById('app').innerHTML === "<ul><li><h3>Bournemouth v Arsenal: Premier League – live!</h3><a href='https://www.theguardian.com/football/live/2018/jan/14/bournemouth-v-arsenal-premier-league-live'>Click here to go to article</a></li><li><h3>Letter: Peter Preston and the Journalist Network</h3><a href='https://www.theguardian.com/media/2018/jan/14/peter-preston-obituary-letter'>Click here to go to article</a></li></ul>")
  }

  exports.testPrintHtml = testPrintHtml;
})(this);
