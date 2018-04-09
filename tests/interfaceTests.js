describe ('news summary web interface', function() {
  it('shows a list of headlines on load', function(){
    webTitles =  ukNewsTestHeadlines.response.results.map (function(result) { return result.webTitle });
    randSelect = Math.floor(Math.random() * (webTitles.length)-1);
    oneShotStub(apiHandler, 'get').andReturnValue(ukNewsTestHeadlines);
    document.onload = function() {
      return expect(`headline_0`).toHaveHTMLcontent(webTitles[0]);
    };
  });
});
