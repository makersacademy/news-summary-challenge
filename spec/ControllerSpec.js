(function() {
  console.log("Testing Controller: ");

  var mockArticleListView = {
    toHtmlCalledCount: 0,
    toHtml: function() {
      this.toHtmlCalledCount++;
      return "<div>Litany of fascinating article headlines</div>"
    }
  }

  var controller = new Controller(mockArticleListView);

  (function() {
    console.log(" it calls articleListView.toHtml on instantiation");
    assert.isTrue(mockArticleListView.toHtmlCalledCount === 1);
  })();

  (function() {
    console.log(" it renders the articleListView html in the app div");
    var appDiv = document.getElementById("app");
    assert.isTrue(appDiv.innerHTML === mockArticleListView.toHtml());
  })();

})();
