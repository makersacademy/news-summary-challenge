(function(){
  test.describe("NewsModel", function(){
    test.it("Has a text content", function() {
      var newsModel = new NewsModel("test");
      assert.isTrue(newsModel.text() === 'test');
    });
  });
})();
