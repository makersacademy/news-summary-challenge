describe("News List", () => {
  it('can add articles to the list of news', () => {
    let list = new NewsList
    list.add('First title', 'First url', 'First pic')
    list.add('Second title', 'Second url', 'Second pic')
    expect(list.newsArray.length).toEqual(2)
  })
});