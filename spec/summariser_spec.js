(function () {
  let webUrl = 'https://www.theguardian.com/us-news/live/2020/may/29/george-floyd-killing-protests-minneapolis-minnesota-us-twitter-donald-trump-latest-news-live';
  let summary = new Summary(webUrl);

  function testInstantiatesWithAnUrl() {
    assert.isTrue(summary.url === webUrl);
  }

  function testSummarize() {
    let summarizedHeadline = 'We see people burning cars, we see people damaging businesses large and small, including some businesses I believe which are owned by local African-American business owners. The US ambassador to Congo, Mike Hammer, highlighted a tweet from a local media entrepreneur who addressed him saying, “Dear ambassador, your country is shameful. The ambassador’s response, in French, said: “I am profoundly troubled by the tragic death of George Floyd in Minneapolis. “For everyone that was on when the live stream cut out I’m good”, he wrote on Twitter. A crew from WAVE-TV was downtown in the Kentucky city Friday night, covering demonstrations over the death of Breonna Taylor, a black woman killed by police in her own home in March.';

    assert.isTrue(summary.summarize() === summarizedHeadline);
  }

  testInstantiatesWithAnUrl();
  testSummarize();
})();
