describe("newsItem", () => {
  it("can extract a headline from an api response element", () => {
    const input = apiResult.response.results[0].fields;
    const testItem = new newsItem(input, 0);
    const headline = testItem.getHeadlineHTML();
    expect(headline.textContent).toEqual(input.headline)
  });
  it("wraps the headline from the api in an anchor tag", () => {
    const input = apiResult.response.results[0].fields;
    const testItem = new newsItem(input, 0);
    const headline = testItem.getHeadlineHTML();
    expect(headline.tagName).toEqual('A');
  });
  it("gives the headline an ID based on the article number", () => {
    const input = apiResult.response.results[0].fields;
    const articleNumber = 0
    const testItem = new newsItem(input, articleNumber);
    const headline = testItem.getHeadlineHTML();
    expect(headline.id).toEqual(`Article #${articleNumber} headline`)
  });
  it("adds a link to the article in the headline", () => {
    const input = apiResult.response.results[0].fields;
    const articleNumber = 0
    const testItem = new newsItem(input, articleNumber);
    const headline = testItem.getHeadlineHTML();
    expect(headline.href).toEqual(input.shortUrl);
  })
  it("makes the headline an element of the headline class", () => {
    const input = apiResult.response.results[0].fields;
    const articleNumber = 0
    const testItem = new newsItem(input, articleNumber);
    const headline = testItem.getHeadlineHTML();
    expect(headline.className).toEqual("headline");
  });
  it("can extract the body of the article from an api response element", () => {
    const input = apiResult.response.results[0].fields;
    const testItem = new newsItem(input, 0);
    const headline = testItem.getb;
    expect(headline.textContent).toEqual(input.headline)
  });
})