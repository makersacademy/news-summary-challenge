(function () {
  let guardian = new Guardian();
  let headline = new Headline();
  let headlineView = new HeadlineView(headline);

  function testInstantiatesWithHeadline() {
    assert.isTrue(headlineView.headline === headline);
  }

  // function testAddHTMLTags() {
  //   let title = guardian.onload().response.results[0].webTitle;
  //   let url = guardian.onload().response.results[0].webUrl;
  //   let headline = new Headline(title, url);
  //   let summary = 'We see people burning cars, we see people damaging businesses large and small, including some businesses I believe which are owned by local African-American business owners. The US ambassador to Congo, Mike Hammer, highlighted a tweet from a local media entrepreneur who addressed him saying, “Dear ambassador, your country is shameful. The ambassador’s response, in French, said: “I am profoundly troubled by the tragic death of George Floyd in Minneapolis. “For everyone that was on when the live stream cut out I’m good”, he wrote on Twitter. A crew from WAVE-TV was downtown in the Kentucky city Friday night, covering demonstrations over the death of Breonna Taylor, a black woman killed by police in her own home in March.';
  //
  //   assert.isTrue(headlineView.addHTMLTags() === '<div><h1>' + headline.title + '</h1><p>' + summary + '</p></div>');
  // }

  testInstantiatesWithHeadline();
  // testAddHTMLTags();
})();
