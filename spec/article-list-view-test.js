describe("ArticleListView", function() {
  it("takes a article list upon instantiation", function() {
    var articleList = new ArticleList()
    var articleListView = new ArticleListView(articleList);
    expect(articleListView.articleList).toEqual(articleList)
  })

  it("returns the view in html", function() {
    var articleList = new ArticleList();
    articleList.add("Pound drops again")
    var articleListView = new ArticleListView(articleList)
    expect(articleListView.getHTML()).toEqual('<p>Pound drops again</p>')
})

})
