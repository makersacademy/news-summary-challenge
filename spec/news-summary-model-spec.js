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
    
    it("creates a new note", function(){
      newsSummaryModel.createNote("0", newsModelMock);
      assert.isTrue(newsModel.title() === "TestNews");
    });

    // it("stores a note", function(){
    //   newsSummaryModel.storeNote(note1);
    //   return expect(noteManager.noteList()).toInclude(note1);
    // });
    //
    // it("returns the content of a specific note", function(){
    //   newsSummaryModel.createNote("First note");
    //   newsSummaryModel.createNote("Second note");
    //   newsSummaryModel.createNote("Third note");
    //   return expect(newsSummaryModel.getNote(1).displayContent()).toEqual("Second note");
    // });
  });
})();
