(function(exports) {
  function OneHeadlineAsHTML() {
    headlineList = new HeadlineList();
    headlineList.add("World says Hello");
    view = new HeadlineListView(headlineList);
    assert.contains(view.render(), "<p>World says Hello</p>");
  }

  function MultipleHeadlinesAsHTML() {
    headlineList = new HeadlineList();
    headlineList.add("World says Hello");
    headlineList.add("Hello says World");
    view = new HeadlineListView(headlineList);
    assert.contains(
      view.render(),
      "<p>World says Hello</p><p>Hello says World</p>"
    );
  }

  OneHeadlineAsHTML();
  MultipleHeadlinesAsHTML();
})(this);
