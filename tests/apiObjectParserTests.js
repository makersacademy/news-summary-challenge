describe ('api object parser', function() {
  it('retrieves an array of webtitles ', function(){
    webTitles =  ukNewsTestHeadlines.response.results.map (function(result) { return result.webTitle });
    expect(apiObjectParser(ukNewsTestHeadlines, "webTitle")).toEqual(webTitles);
  });
  it('retrieves an array of api urls ', function(){
    apiUrls =  ukNewsTestHeadlines.response.results.map (function(result) { return result.apiUrl });
      expect(apiObjectParser(ukNewsTestHeadlines, "apiUrl")).toEqual(apiUrls);
  });
});
