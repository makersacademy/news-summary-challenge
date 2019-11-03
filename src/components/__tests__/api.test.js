import { getArticles, getSummary } from "../api";
jest.mock("../api");

test("should fetch articles", () => {
  const articles = [{ title: "Title", description: "Description" }];
  getArticles().then(data => {
    expect(data.articles).toEqual(articles);
  });
});

test("should fetch summary", () => {
  getSummary().then(data => {
    expect(data.sentences).toEqual("Lorem ipsum again");
  });
});
