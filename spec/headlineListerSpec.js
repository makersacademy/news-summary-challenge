describe("testing example output", function() {

  it("should return OK -- Sanity Check", function(){
    expect(exampleOutputTester(exampleOutput)).toEqual("ok");
  });

});

describe("NewsParser", function() {

  it("#headline should return headline at index", function(){
    var url = "src/testOutput.json";
    var news = new NewsParser(exampleOutput);
    var headline0 = "Championship clockwatch: Cardiff v Reading, Birmingham v Fulham – live!";
    var headline5 = "Greening warns young voters won't forgive damaging Brexit deal";
    expect(news.headline(0)).toEqual(headline0);
    expect(news.headline(5)).toEqual(headline5);
  });

  it("#url should return the url of news story at index", function(){
    var url = "src/testOutput.json";
    var news = new NewsParser(exampleOutput);
    var url3 = "https://www.theguardian.com/media/media-blog/2018/may/06/windrush-scandal-racism-papers";
    expect(news.url(3)).toEqual(url3);
  });

  it("#allStories should return the array of story objects", function(){
    var url = "src/testOutput.json";
    var news = new NewsParser(exampleOutput);
    var headline5 = "Greening warns young voters won't forgive damaging Brexit deal";
    var url3 = "https://www.theguardian.com/media/media-blog/2018/may/06/windrush-scandal-racism-papers";
    expect(news.allStories[3].webUrl).toEqual(url3);
    expect(news.allStories[5].webTitle).toEqual(headline5);
  });

});

describe("NewsGrabber", function() {

  it("should return json object", function(){
    var url = "http://127.0.0.1:8080/src/testOutput.json";
    var grabber = new NewsGrabber(url);
    expect(typeof grabber).toEqual("object");
  });

});
