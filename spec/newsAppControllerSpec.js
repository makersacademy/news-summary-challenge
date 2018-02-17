(function newsAppControllerSpec() {
  const mockArticleResponse = {
    results: [
      {
        webUrl: 'url',
        webTitle: 'title',
        summary: { text: 'some summary text' },
      },

      {
        webUrl: 'anotherurl',
        webTitle: 'anothertitle',
        summary: { text: 'different summary text' },
      },
    ],
  };

  const controller = new NewsAppController();
  controller.recordData(mockArticleResponse);

  it('receives the article api response', () => {
    jennifer.expects(controller.articleData).toEqual(mockArticleResponse);
  });
}());
