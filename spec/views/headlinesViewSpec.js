describe("HeadlinesView", function() {
  it("creates string of html of the headlines", function() {
    var firstHeadlineText = 'Sri Lanka v Australia: Cricket World Cup 2019 – live!';
    var secondHeadlineText ='How did the Golden State Warriors become the team no one likes?';
    var firstHeadline = new Headline(firstHeadlineText);
    var secondHeadline = new Headline(secondHeadlineText);
    var headlinesView = new HeadlinesView();

    assert(headlinesView.createHTML([firstHeadline, secondHeadline]), 
      `<ul><li><div>${firstHeadlineText}</div></li>` +
      `<li><div>${secondHeadlineText}</div></li></ul>`
    );
  });
});