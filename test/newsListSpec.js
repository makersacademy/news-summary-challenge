describe("News List", () => {
  it('displays a list of news', () => {
    let list1 = new NewsList
    let result = list1.getNewsList()
    expect(list1.newsArray.length).toEqual(result)
  })
});