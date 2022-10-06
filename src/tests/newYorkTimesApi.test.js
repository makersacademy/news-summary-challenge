const NewYorkTimesApi = require("../newYorkTimesApi");
const mockArticles = require("../mockArticles");

require("jest-fetch-mock").enableMocks();

describe("NewYorkTimesApi", () => {
  it("fetches data from NYT Top Stories API", async () => {
    const api = new NewYorkTimesApi();
    fetch.mockResponseOnce(JSON.stringify({ results: mockArticles }));
    const articles = await api.getArticles();
    expect(articles.length).toEqual(4);
    expect(articles[0].title).toEqual(
      "Russians Fleeing the Draft Find an Unlikely Haven"
    );
    expect(articles[0].byline).toEqual("By Andrew Higgins");
    expect(articles[0].published_date).toEqual("2022-10-05T00:01:25-04:00");
    expect(articles[0].section).toEqual("world");
    expect(articles[0].abstract).toEqual(
      "Tens of thousands of men have ended up in places like Kyrgyzstan, a former Soviet territory, that normally see few refugees but are willing to take them."
    );
    expect(articles[1].title).toEqual(
      "OPEC and Russia meet today, with a big cut in oil output on the table."
    );
    expect(articles[1].byline).toEqual("By Stanley Reed");
    expect(articles[1].published_date).toEqual("2022-10-05T01:08:43-04:00");
    expect(articles[1].section).toEqual("business");
    expect(articles[1].abstract).toEqual(
      "Saudi Arabia appears determined to bolster prices and continue coordinating with Russia during the Ukraine war."
    );
  });
});
