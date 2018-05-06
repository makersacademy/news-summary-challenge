describe("testing example output", function() {

  it("should return OK -- Sanity Check", function(){
    expect(exampleOutputTester(exampleOutput)).toEqual("ok");
  });

});

describe("NewsGrabber", function() {

  it("#headline should return headline at index", function(){
    var news = new NewsGrabber(exampleOutput);
    var headline0 = "Championship clockwatch: Cardiff v Reading, Birmingham v Fulham – live!";
    var headline5 = "Greening warns young voters won't forgive damaging Brexit deal";
    expect(news.headline(0)).toEqual(headline0);
    expect(news.headline(5)).toEqual(headline5);
  });

  it("#url should return the url of news story at index", function(){
    var news = new NewsGrabber(exampleOutput);
    var url3 = "https://www.theguardian.com/media/media-blog/2018/may/06/windrush-scandal-racism-papers";
    expect(news.url(3)).toEqual(url3);
  });




});
