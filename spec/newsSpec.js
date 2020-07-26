it('>>Should be able to return the headlines',function()
  {
    news = new NewsArticle("BREAKING: covid19 is now over!", "fakeurl")
    expect(news.headline).toEqual("BREAKING: covid19 is now over!")
});
