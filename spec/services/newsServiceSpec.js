describe("NewsService", function() {
  it("returns headlines", function() {
    var newsService = new NewsService();
    var firstHeadline = 'Sri Lanka v Australia: Cricket World Cup 2019 – live!';
    var secondHeadline ='How did the Golden State Warriors become the team no one likes?';
    var headlinesJson = generateHeadlinesJson([firstHeadline, secondHeadline]);
    var actualHeadlines;

    setupResponse(headlinesJson);

    newsService.getHeadlines(function(headlines) {
      actualHeadlines = headlines;
    });
    
    assert(actualHeadlines.length, 2);
    assert(actualHeadlines[0].getText(), firstHeadline);
    assert(actualHeadlines[1].getText(), secondHeadline);
  });
});