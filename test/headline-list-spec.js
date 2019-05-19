(function(exports) {
  function anArrayOfHeadlines() {
    headlineList = new HeadlineList();
    headlineList.add("World says Hello");
    headlineList.add("Hello says World");
    assert.isArray(headlineList.all());
  }

  function headlinesHaveText() {
    headlineList = new HeadlineList();
    headlineList.add("World says Hello");
    assert.contains(headlineList.all()[0].headline, "World says Hello");
  }

  anArrayOfHeadlines();
  headlinesHaveText();
})(this);
