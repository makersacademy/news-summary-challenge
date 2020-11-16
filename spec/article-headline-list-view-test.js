let articleHeadlineListView = new ArticleHeadlineListView(articleListMock)

it('can be instantiated', function(){
  expect(articleHeadlineListView).toBeAnInstanceOf(ArticleHeadlineListView)
})

it('returns html string of ArticleList model array', function(){
  console.log(articleHeadlineListView.returnHTML())
  expect(articleHeadlineListView.returnHTML()).toEqual(`<ul style="list-style-type:none"><li><div class="newsheadlineclass"><img class="image" src="corona1.img" alt="The News Today"><a id="headline" href='#articles/0'>Corona scare 1</a></div></li><li><div class="newsheadlineclass"><img class="image" src="corona2.img" alt="The News Today"><a id="headline" href='#articles/1'>Corona scare 2</a></div></li></ul>`)
})