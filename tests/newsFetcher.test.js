//I want to see some news on the screen

const NewsFetcher = require("../newsFetcher")

/**
 * @jest-environment jsdom
 */
NewsFetcher
describe(NewsFetcher, () => {
  it('fetches news that can be seen', () => {
    const fetcher = new NewsFetcher;
    fetcher.getNews(fetcher.displayNews)
    expect(document.body)
  })
})