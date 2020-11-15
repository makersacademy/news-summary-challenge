let articleSummaryView = new ArticleSummaryView("89 thousand corona cases were reported on July 14th")

it('can be instantiated', function(){
  expect(articleSummaryView).toBeAnInstanceOf(ArticleSummaryView)
})

it('returns single article summary text in html string', function(){
  expect(articleSummaryView.returnHTML()).toEqual(`<div id="summary">89 thousand corona cases were reported on July 14th</div>`)
})