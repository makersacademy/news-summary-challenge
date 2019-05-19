(function(exports) {
  function HTMLupdate() {
    headlineList = new HeadlineList();
    headlineList.add("World says Hello");
    headlineList.add("Hello says World");
    var controller = new HeadlineController(headlineList);

    assert.contains(
      controller.updateHTML(),
      "<p>World says Hello</p><p>Hello says World</p>"
    );
  }

  HTMLupdate();
})(this);
