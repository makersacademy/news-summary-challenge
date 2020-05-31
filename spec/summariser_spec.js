(function () {
  let webUrl = 'https://www.theguardian.com/us-news/live/2020/may/29/george-floyd-killing-protests-minneapolis-minnesota-us-twitter-donald-trump-latest-news-live';
  let summary = new Summary(webUrl);

  function testInstantiatesWithAnUrl() {
    assert.isTrue(summary.url === webUrl);
  }

  testInstantiatesWithAnUrl();
})();
