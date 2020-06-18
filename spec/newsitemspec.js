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
  it("can extract an blurb from an api response element", () => {
    const input = apiResult.response.results[0].fields;
    const testItem = new newsItem(input, 0);
    const articleBody = testItem.getbodyTextHTML();
    expect(articleBody.textContent).toEqual(input.bodyText.substr(0,200) + '...');
  });
  it("wraps the blurb from the api in a paragraph tag", () => {
    const input = apiResult.response.results[0].fields;
    const testItem = new newsItem(input, 0);
    const articleBody = testItem.getbodyTextHTML();
    expect(articleBody.tagName).toEqual("P");
  });
  it("gives the blurb an ID based on the article number", () => {
    const input = apiResult.response.results[0].fields;
    const articleNumber = 0
    const testItem = new newsItem(input, articleNumber);
    const articleBody = testItem.getbodyTextHTML();
    expect(articleBody.id).toEqual(`Article #${articleNumber} bodytext`)
  });
  it("makes the blurb an element of the body class", () => {
    const input = apiResult.response.results[0].fields;
    const articleNumber = 0
    const testItem = new newsItem(input, articleNumber);
    const articleBody = testItem.getbodyTextHTML();
    expect(articleBody.className).toEqual("body");
  });
  it("can extract an image from an api response element", () => {
    const input = apiResult.response.results[0].fields;
    const testItem = new newsItem(input, 0);
    const articleImage = testItem.getThumbnailHTML();
    expect(articleImage.src).toEqual(input.thumbnail);
  });
  it("wraps the image from the api in an img tag", () => {
    const input = apiResult.response.results[0].fields;
    const testItem = new newsItem(input, 0);
    const articleImage = testItem.getThumbnailHTML();
    expect(articleImage.tagName).toEqual("IMG");
  });
  it("gives the image an ID based on the article number", () => {
    const input = apiResult.response.results[0].fields;
    const articleNumber = 0
    const testItem = new newsItem(input, articleNumber);
    const articleImage = testItem.getThumbnailHTML();
    expect(articleImage.id).toEqual(`Article #${articleNumber} image`)
  });
  it("makes the image an element of the thumbnail class", () => {
    const input = apiResult.response.results[0].fields;
    const articleNumber = 0
    const testItem = new newsItem(input, articleNumber);
    const articleImage = testItem.getThumbnailHTML();
    expect(articleImage.className).toEqual("thumbnail");
  });
})