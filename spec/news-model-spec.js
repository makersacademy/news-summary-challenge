(function(){

  function NewsModelMock(title){
    this._title = title;
  }

  NewsModelMock.prototype.title = function(){
    return this._title;
  };

  test.describe("NewsModel", function(){
    test.it("Has a text content", function() {
      var newsModelMock = new NewsModelMock("TestNews");
      assert.isTrue(newsModelMock.title() === "TestNews");
    });
  });
})();
