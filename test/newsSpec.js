describe('News', () => {
  it('has a title and an url and a pic', () => {
    var title = 'Urgent news'
    var url = 'url link'
    var pic = 'This is pic'
    var news = new News(title, url, pic)
    expect(news.title).toEqual(title)
    expect(news.url).toEqual(url)
    expect(news.pic).toEqual(pic)

  })
})