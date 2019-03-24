describe("News List", () => {
  it('displays a list of news', () => {
    var list = new NewsList
    list.getNewsList()
    expect(list.length).toEqual(10)
  })
})