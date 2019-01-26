describe('Article', () => {
  it('has a title and a url', () => {
    var title = "This is the web title"
    var url = "This is the web url"
    var article = new Article(title,url)
    expect(article.title).toEqual(title)
    expect(article.url).toEqual(url)
  })
})
