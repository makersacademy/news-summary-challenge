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
    html = `<div><ul><li><a id="${headline1.id}" href="#headlines/${headline1.id}"><h3>` + title1 + `</h3></a><p>Follow this <span><a href="${url1}l">link</a></span> to find out more.</p></li><li><a id="${headline2.id}" href="#headlines/${headline2.id}"><h3>` + title2 + `</h3></a><p>Follow this <span><a href="${url2}l">link</a></span> to find out more.</p></li></ul></div>`;

    assert.isTrue(headlinesListView.addHTMLTags() === html);
  }

  testInstantiatesWithAHeadlinesList();
  testAddHTMLTags();
})();
