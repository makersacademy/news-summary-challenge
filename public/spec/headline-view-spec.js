describe('HeadlineView', () => {
  it('can turn headlines to html format', () => {
    var testHeadlineView = new HeadlineView(["Taiwan presidential election"]);
    expectHeadlineView = "<ul><li><div><a href='test'>Taiwan presidential election</a></div></li></ul>"
    expect(testHeadlineView.getHTML()).toEq(expectHeadlineView)
  });
});
