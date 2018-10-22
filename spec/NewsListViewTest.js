describe('News List View', function () {

  it('Starts with an empty NewsList array', function() {
    var newslist = new NewsList();
    var newslistview = new NewsListView(newslist);
    assert.isTrue(newslistview.returnNewsListArticles().length === 0);
  });

  it('Returns a list of headlines', function() {
    var newslist = new NewsList();
    newslist.addArticle("Headline 1");
    var newslistview = new NewsListView(newslist);
    htmlString = '<div><ul><li>Headline 1</li></ul></div>'
    assert.isTrue(newslistview.getHTML() === htmlString);
  });

  it('Returns several headlines', function() {
    var newslist = new NewsList();
    newslist.addArticle("Headline 1");
    newslist.addArticle("Headline 2");
    var newslistview = new NewsListView(newslist);
    htmlString = '<div><ul><li>Headline 1</li><li>Headline 2</li></ul></div>'
    assert.isTrue(newslistview.getHTML() === htmlString);
  });

});
