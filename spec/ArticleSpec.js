describe('Article', () => {
  it('has a title, a url and a pic', () => {
    var title = "This is the web title"
    var url = "This is the web url"
    var pic = "This is the pic"
    var article = new Article(title,url,pic)
    expect(article.title).toEqual(title)
    expect(article.url).toEqual(url)
    expect(article.pic).toEqual(pic)
  })
})
