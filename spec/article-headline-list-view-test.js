let articleHeadlineListView = new ArticleHeadlineListView(headlineListMock)

it('can be instantiated', function(){
  expect(articleHeadlineListView).toBeAnInstanceOf(ArticleHeadlineListView)
})

it('returns html string of ArticleList model array', function(){
  expect(articleHeadlineListView.returnHTML()).toEqual(`<ul style="list-style-type:none"><li><div id="headline"><a href='#articles/0'>Corona scare 1</a></div></li><li><div id="headline"><a href='#articles/1'>Corona scare 2</a></div></li></ul>`)
})