'use strict';

// NOT USED

describe("Headlines", () => {
  it("can store headlines given webTitle, webUrl, thumbnail", () => {
    let headlines = new Headlines();
    let webTitle = "This is a title";
    let webUrl = "This is a web url";
    let thumbnail = "This is a thumbnail";

    expect(headlines.addArticle(webTitle, webUrl, thumbnail)).toEq(0);
  })

  it("Can store multiple headlines", () => {
    let headlines = new Headlines();
    let webTitle = "This is a title";
    let webUrl = "This is a web url";
    let thumbnail = "This is a thumbnail";
    headlines.addArticle(webTitle, webUrl, thumbnail);

    expect(headlines.addArticle(webTitle, webUrl, thumbnail)).toEq(1);
  })

  it("can retrieve an articles info", () => {
    let headlines = new Headlines();
    let webTitle = "This is a title";
    let webUrl = "This is a web url";
    let thumbnail = "This is a thumbnail";
    headlines.addArticle(webTitle, webUrl, thumbnail);

    expect(headlines.getArticle(0)["webTitle"]).toEq(webTitle);
    expect(headlines.getArticle(0)["webUrl"]).toEq(webUrl);
    expect(headlines.getArticle(0)["thumbnail"]).toEq(thumbnail);
  })
})