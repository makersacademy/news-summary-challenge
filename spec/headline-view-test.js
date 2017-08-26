describe("Headline View", function() {
  var htmlString = "<ul><li><div>Fake headline</div></li></ul>"

  var headlineListMock = {
    getList: function() {
      return ["Fake headline"];
    }
  };

  it("returns the headlines as html string", function() {
    var headlineView = new HeadlineView(headlineListMock);
    assert.isTrue(headlineView.toHtml() === htmlString);
  })

});
