
describe('News initializes', function() {
  var news = new News("title", "url", "imgUrl", "summary");  

  it('with a given title', function() {
    expect(news.title).toBe("title")
  });

  it('with a given url', function () {
    expect(news.url).toBe("url")      
  });

  it('with a given imgUrl', function () {
    expect(news.imgUrl).toBe("imgUrl")      
  });

  it('with a given summary', function () {
    expect(news.summary).toBe("summary")      
  });
});