describe('HeadlineView', () => {
  it('can turn headlines to html format', () => {
    var testHeadlineView = new HeadlineView(["Taiwan presidential election"]);
    // testHeadlineView.add("Taiwan presidential election")
    expectHeadlineView = "<ul><li><div>Taiwan presidential election</div></li></ul>"
    expect(testHeadlineView.getHTML()).toEq(expectHeadlineView)
  });
});