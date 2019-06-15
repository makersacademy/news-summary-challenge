describe("NewsService", function() {
  it("returns headlines", function() {
    var newsService = new NewsService();
    var firstHeadline = 'Sri Lanka v Australia: Cricket World Cup 2019 – live!';
    var secondHeadline ='Plucked from obscurity: why bluegrass is making a comeback';
    var headlinesJson = generateHeadlinesJson([firstHeadline, secondHeadline]);
    setupResponse(headlinesJson);
    var actualHeadlines;

    newsService.getHeadlines(function(headlines) {
      actualHeadlines = headlines;
    })
    
    assert(actualHeadlines.length, 2);
    assert(actualHeadlines[0].getText(), firstHeadline);
    assert(actualHeadlines[1].getText(), secondHeadline);
  });
});