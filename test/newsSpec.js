describe('News', () => {
  it('has a title and an url', () => {
    var title = 'Urgent news'
    var url = 'url link'
    var news = new News(title, url)
    expect(news.title).toEqual(title)
    expect(news.url).toEqual(url)
  })
})