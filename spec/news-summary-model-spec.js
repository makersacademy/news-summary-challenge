(function(){
  test.describe("NewsSummaryModel", function(){

    function NewsModelMock(id) {
      this._NewsId = id;
    }

    NewsModelMock.prototype.title = {
      id: function(){
        return this._NewsId;
      }
    };

    var newsSummaryModel = new NewsSummaryModel();

    it("creates the summary of news list", function(){
      newsSummaryModel.createNote("0", newsModelMock);
      assert.isTrue(newsModel.title() === "TestNews");
    });

    it("display the summary of news list", function(){
      newsSummaryModel.createNote("0", newsModelMock);
      assert.isTrue(newsModel.title() === "TestNews");
    });
  });
})();
