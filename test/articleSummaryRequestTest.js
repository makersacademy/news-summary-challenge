var apiRequestResponse = {
text: "As a young man, my colleague Leslie Fairweather, who has died aged 89, contracted TB and spent four years in hospital. Thereafter, as if to make up for that, he lived life to the full. He became an architect and editor, and was an international authority on the design of prisons.\n\nAfter designing the first extension to the Glyndebourne opera house in the late 1950s, Leslie joined the Architects’ Journal in 1962 to oversee the production of its design guide programme. He also co-edited the Metric Handbook, which was for years an indispensable handbook in every architect’s office",
sentences: [
"He became an architect and editor, and was an international authority on the design of prisons.",
]
}

var successfulHttpRequest = {
    readyState: 4,
    status: 200,
    responseText: JSON.stringify(apiRequestResponse),
    open: function() {},
    send: function() { this.onreadystatechange()}
  }

it('instantiates with an empty summary content', function(){
  var summaryRequest = new ArticleSummaryRequest('url');
  return assert.isTrue(summaryRequest.summary.length === 0)
})

it('stores url argument passed at instantiation', function (){
  var summaryRequest = new ArticleSummaryRequest('https://www.theguardian.com/artanddesign/2018/feb/18/leslie-fairweather-obituary')
  return assert.isTrue(summaryRequest.articleUrl, 'https://www.theguardian.com/artanddesign/2018/feb/18/leslie-fairweather-obituary')
})

it('stores sentences returns from api apiRequestResponse',function(){
  var summaryRequest = new ArticleSummaryRequest();
  summaryRequest.requestSummary(successfulHttpRequest)
  return assert.equals(summaryRequest.summary, "He became an architect and editor, and was an international authority on the design of prisons.")
})
