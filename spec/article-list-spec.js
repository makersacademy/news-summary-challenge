describe("Article List Model", function(){
  var list = new ArticleList();

  it("initialises with an empty list", function(){
    assert(list.list.length, 0);
  });

  it("adds a new article to the list", function(){
    list.add("test title", "test url");
    assert(list.list.length, 1);
  });
});
