(function () {
  let guardian = new Guardian();
  let webTitle = guardian.onload().response.results[0].webTitle;
  let webUrl = guardian.onload().response.results[0].webUrl;

  let headline = new Headline(webTitle, webUrl);

  function testInstantiatesWithTitleAndUrl() {
    console.log(guardian.onload().response.results[0]);

    assert.isTrue(headline.webTitle === webTitle);
    assert.isTrue(headline.webUrl === webUrl);
  }

  function testHeadlineInstanceHasAnUniqueId() {
    console.log(guardian.onload().response.results[1]);
    let webTitle = guardian.onload().response.results[1].webTitle;
    let webUrl = guardian.onload().response.results[1].webUrl;
    let newHeadline = new Headline(webTitle, webUrl);

    assert.isTrue(newHeadline.id === 2);
  }

  function testGetterTitle() {
    assert.isTrue(headline.title === headline.webTitle);
  }

  testInstantiatesWithTitleAndUrl();
  testHeadlineInstanceHasAnUniqueId();
  testGetterTitle();
})();
