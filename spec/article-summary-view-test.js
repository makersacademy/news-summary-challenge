// mocking Article model
let newsArticle = {
  returnSummary: function(){
    return "Scientists reveal that the vaccine is only 80% effective"
  }
}

let articleSummaryView = new ArticleSummaryView(headlineMock1.returnSummary())

it('can be instantiated', function(){
  expect(articleSummaryView).toBeAnInstanceOf(ArticleSummaryView)
})

it('returns single article summary text in html string', function(){
  expect(articleSummaryView.returnHTML()).toEqual(`<div id="summary">Corona 1 summary</div>`)
})