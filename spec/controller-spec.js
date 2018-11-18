var article1 = {
  title: "Title1",
  body: "Body1"
}

var article2 = {
  title: "Title2",
  body: "Body2"
}

var articleList = {
  list: [article1, article2],
  index: 0
}

var dummyData = {
  webTitle: "Article Title",
  fields: {thumbnail: "Picture"}
}

var controller = new NewsController(articleList);

describe("Controller",
it("can fetch a list of titles and images",
expect(controller.displayList()).toEqual("NOT SURE")));
