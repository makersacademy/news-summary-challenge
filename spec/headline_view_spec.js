(function () {
  let guardian = new Guardian();
  let title = guardian.onload().response.results[0].webTitle;
  let url = guardian.onload().response.results[0].webUrl;
  let headline = new Headline(title, url);
  let headlineView = new HeadlineView(headline);

  function testInstantiatesWithHeadline() {
    assert.isTrue(headlineView.headline === headline);
  }

  function testAddHTMLTags() {
    let html = '<div><h1>' + headline.title + `</h1><p>Follow this <a href="${headline.url}">link</a></p></div>`;
    console.log(html);

    assert.isTrue(headlineView.addHTMLTags() === html);
  }

  testInstantiatesWithHeadline();
  testAddHTMLTags();
})();
