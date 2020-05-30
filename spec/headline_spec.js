(function () {
  let guardian = new Guardian();
  let webTitle = guardian.onload().response.results[0].webTitle;
  let webUrl = guardian.onload().response.results[0].webUrl;
  let headline = new Headline(webTitle, webUrl);

  function testHeadlineInstantiatesWithTitleUrlAndId() {
    console.log(guardian.onload().response.results[0]);

    assert.isTrue(headline.webTitle === webTitle);
    assert.isTrue(headline.webUrl === webUrl);
  }

  testHeadlineInstantiatesWithTitleUrlAndId();
})();
