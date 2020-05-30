(function () {
  let guardian = new Guardian();
  let headlinesList = new HeadlinesList();
  let headlinesListView = new HeadlinesListView(headlinesList);

  function testInstantiatesWithAHeadlinesList() {
    assert.isTrue(headlinesListView.list === headlinesList);
  }

  function testAddHTMLTags() {
    let title1 = guardian.onload().response.results[0].webTitle;
    let url1 = guardian.onload().response.results[0].webUrl;
    let title2 = guardian.onload().response.results[1].webTitle;
    let url2 = guardian.onload().response.results[1].webUrl;
    let headline1 = new Headline(title1, url1);
    let headline2 = new Headline(title2, url2);
    headlinesList.addHeadline(headline1);
    headlinesList.addHeadline(headline2);
    html = '<div><ul><li>' + title1 + '</li><li>' + title2 + '</li></ul></div>';

    assert.isTrue(headlinesListView.addHTMLTags() === html);
  }

  testInstantiatesWithAHeadlinesList();
  testAddHTMLTags();
})();
