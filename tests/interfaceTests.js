describe ('news summary web interface', function() {
  it('shows a list of headlines on load', function(){
    webTitles =  ukNewsTestHeadlines.response.results.map (function(result) { return result.webTitle });
    randSelect = Math.floor(Math.random() * (webTitles.length)-1);
    oneShotStub(apiHandler, 'get').andreturnValue(headlines);
    expect(`headlines_${randSelect}`).toHaveHTMLcontent(webTitles[randSelect]);
  });
});
