const NewsModel = require("./newsModel");

describe(NewsModel, () => {
  it("adds a new article into an array", () => {
    const model = new NewsModel();

    model.setArticles({
      response: {
        results: [
          {
            fields: {
              headline: "News Flash!",
              thumbnail:
                "https://media.guim.co.uk/1f5a49b8c3621abad6be2b626928bff446eeb70b/65_152_2434_1460/500.jpg",
            },
          },
        ],
      },
    });

    expect(model.getArticles()).toStrictEqual([
      {
        fields: {
          headline: "News Flash!",
          thumbnail:
            "https://media.guim.co.uk/1f5a49b8c3621abad6be2b626928bff446eeb70b/65_152_2434_1460/500.jpg",
        },
      },
    ]);
  });
});
