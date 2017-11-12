(function(exports) {

  function testArticleListIsCreated() {
    var articlelist = new ArticleList();
    assert.isTrue(article = new ArticleList());
  }
  testArticleListIsCreated();

  function articlesAreStoredOnList() {
    var articlelist = new ArticleList();
    assert.isTrue(Array.isArray(articlelist._list));
  }
  articlesAreStoredOnList();

    function returnsArticlesStoreInList() {
      var articlelist = new ArticleList();
      assert.isTrue(Array.isArray(articlelist.getArticleList()));
    };
    returnsArticlesStoreInList();

    // function createNote() {
    //   var notelist = new NoteList();
    //   notelist.createNote("note1")
    //   assert.isTrue(notelist.getNotes().length === 1);
    // };
    // createNote();
    //
    // function assignsNoteId() {
    //   var notelist = new NoteList();
    //   notelist.createNote();
    //   assert.isTrue(notelist.getNotes()[0].getNoteId() === 0)
    // }
    // assignsNoteId();



})(this);
