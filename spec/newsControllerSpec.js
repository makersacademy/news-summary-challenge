describe("NewsController", function() {
  var mockAPI = {
    response: {
      results: [
        {
          webUrl: 'url1',
          webTitle: 'title1',
        },

        {
          webUrl: 'url2',
          webTitle: 'title2',
        },
      ],
    },
  };

  var controller = new NewsController;
  controller.storeResponse(mockAPI);

  it("receives an API response", function() {
    console.log(jotun.expect(controller.apiResponse).isEqual(mockAPI));
  });

  it("extracts article data from the response", function() {
    controller.processResponse();
    console.log(jotun.expect(newspaper.articleList.length).isEqual(3));
  });
});
