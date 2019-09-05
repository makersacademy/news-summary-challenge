describe('NewsController', function() {
  it('initialises with a list of articles', function() {
    const newsArticleList = {};
    const newsController = new NewsController(newsArticleList);

    expect(newsController.list).toEqual(newsArticleList);
  });

  describe('#renderHeadlines', function() {
    const htmlString =
      '<ul>' +
      '<li id="1">' +
      '<a href="#articles/1">' +
      '<h3>England win World Cup</h3>' +
      '</a>' +
      '</li>' +
      '<li id="2">' +
      '<a href="#articles/2">' +
      '<h3>Queen rides pony</h3>' +
      '</a>' +
      '</li>' +
      '</ul>';

    const newsArticleListDouble = {
      convertToHTML() {
        return htmlString;
      }
    };

    const element = {};
    const newsController = new NewsController(newsArticleListDouble);

    it('displays headlines on page', function() {
      newsController.renderHeadlines(element);
      expect(element.innerHTML).toEqual(htmlString);
    });
  });
});
