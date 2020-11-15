let articleHeadlineListView = new ArticleHeadlineListView(articleListMockArray)

it('can be instantiated', function(){
  expect(articleHeadlineListView).toBeAnInstanceOf(ArticleHeadlineListView)
})

it('returns html string of ArticleList model array', function(){
  console.log(articleHeadlineListView.returnHTML())
  expect(articleHeadlineListView.returnHTML()).toEqual(`<ul style="list-style-type:none"><li><div class="newsheadlineclass"><img class="image" src="corona1.img" alt="The News Today"><h2 id="headline" href='#articles/0'>Corona scare 1</h2></div></li><li><div class="newsheadlineclass"><img class="image" src="corona2.img" alt="The News Today"><h2 id="headline" href='#articles/1'>Corona scare 2</h2></div></li></ul>`)
})