// mocking Article model
let newsArticle = {
  returnSummary: function(){
    return "Scientists reveal that the vaccine is only 80% effective"
  }
}

let articleSummaryView = new ArticleSummaryView(newsArticle)

it('can be instantiated', function(){
  expect(articleSummaryView).toBeAnInstanceOf(ArticleSummaryView)
})

it('returns single article summary text in html string', function(){
  expect(articleSummaryView.returnHTML()).toEqual("<div>Scientists reveal that the vaccine is only 80% effective</div>")
})