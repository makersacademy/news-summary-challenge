class News {
  constructor(title, apiUrl, webUrl, id) {
    this.title = title;
    this.apiUrl = apiUrl;
    this.webUrl = webUrl;
    this.id = id
  }
}

describe('news', function() {
  it('should have a title and url as an instance of News', () => {
    news = new News('a title', 'http://somewhere', 'http://anotherplace', 1)
    expect(news.title).toEqual('a title')
  });
});
  