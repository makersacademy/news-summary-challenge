(function(exports) {
  function anArrayOfHeadlines() {
    headline = new Headline("World says Hello");
    headlineTwo = new Headline("Hello says World");
    headlineList = new HeadlineList();
    headlineList.add(headline);
    headlineList.add(headlineTwo);
    assert.isArray(headlineList.all());
  }

  function headlinesHaveText() {
    headline = new Headline("World says Hello");
    headlineList = new HeadlineList();
    headlineList.add(headline);
    assert.contains(headlineList.all()[0].headline, "World says Hello");
  }

  anArrayOfHeadlines();
  headlinesHaveText();
})(this);
