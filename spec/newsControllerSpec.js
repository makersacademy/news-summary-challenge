describe('NewsController', function() {
  it('initialises with a list of articles', function() {
    let newsArticleList = {};
    let newsController = new NewsController(newsArticleList);

    expect(newsController.list).toEqual(newsArticleList);
  });

  
});