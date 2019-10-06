(function() {
  describe('NewsItem')

  let title = "Ukraine to review legal cases amid Trump claims over Bidens"
  let url = "https://www.theguardian.com/world/2019/oct/04/ukraine-to-review-legal-cases-amid-trump-claims-over-bidens"
  let newsItem = new NewsItem(title, url)

  it('is an instance of NewsItem')
  assert.isInstanceOf(newsItem, NewsItem)

  it('has a title')
  assert.isTrue(newsItem.webTitle, title)


})();
