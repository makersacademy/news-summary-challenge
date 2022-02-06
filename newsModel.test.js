const { expect } = require("@jest/globals");
const NewsModel = require("./newsModel");

describe("NewsModel class", () => {
    const newsList = [
        {
           "news": {
               "headline": "Test Headline 1",
               "thumbline": "test_img 1",
           },
           "webUrl": "testurl_1",
       },
       {
           "news": {
               "headline": "Test Headline 2",
               "thumbline": "test_img 2",
           },
           "webUrl": "testurl_2"
       }
    ]
  const model = new NewsModel();
  it("should keep  news headlines within array", () => {
   model.setNews(newsList)
   expect(model.getNews()).toEqual(newsList)
  });
});
